import mongoose from "mongoose";

// Fix the global type declaration
declare global {
  // Use correct type for global mongoose
  var mongooseConnection: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// Initialize the global variable if it doesn't exist
if (!global.mongooseConnection) {
  global.mongooseConnection = { conn: null, promise: null };
}

export async function connectToDatabase() {
  // Check if we already have a connection
  if (global.mongooseConnection.conn) {
    console.log("✓ Using existing database connection");
    return global.mongooseConnection.conn;
  }

  if (!global.mongooseConnection.promise) {
    const MONGODB_URI = process.env.MONGODB_URI || "";
    console.log(
      `Connecting to MongoDB at ${MONGODB_URI.substring(
        0,
        MONGODB_URI.indexOf("@") > 0 ? MONGODB_URI.indexOf("@") : 10
      )}...`
    );

    // Set mongoose options to ensure connection is reused
    mongoose.set("strictQuery", true);
    global.mongooseConnection.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
      socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
      serverSelectionTimeoutMS: 30000, // Increase server selection timeout
      retryWrites: true,
      retryReads: true,
    });
  }
  try {
    const mongooseInstance = await global.mongooseConnection.promise;
    global.mongooseConnection.conn = mongooseInstance.connection;

    console.log("✓ New database connection established");
    console.log(
      `Connected to database: ${global.mongooseConnection.conn.name}`
    );

    // Log a message and update state when connected
    global.mongooseConnection.conn.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    // Add event listeners for connection status
    global.mongooseConnection.conn.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      // Log detailed error information
      if (
        err.name === "MongoNetworkError" ||
        err.message.includes("ETIMEOUT")
      ) {
        console.error(
          "Network error detected. Please check your internet connection and MongoDB Atlas service status."
        );
        console.error(
          "Make sure your IP address is whitelisted in MongoDB Atlas."
        );
      }
      global.mongooseConnection.conn = null;
      global.mongooseConnection.promise = null;
    });

    global.mongooseConnection.conn.on("disconnected", () => {
      console.log("MongoDB disconnected");
      if (!mongoose.connection.readyState) {
        global.mongooseConnection.conn = null;
        global.mongooseConnection.promise = null;
      }
    });
  } catch (e) {
    global.mongooseConnection.promise = null;
    console.error("Error connecting to database:", e);
    throw e;
  }

  return global.mongooseConnection.conn;
}

// Export singleton instance
export default mongoose;
