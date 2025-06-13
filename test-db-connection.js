// This is a script to test MongoDB connection
// Run with: node test-db-connection.js

require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

async function testConnection() {
  console.log("\n===== TESTING MONGODB CONNECTIONS =====\n");

  // Test mongoose connection
  try {
    console.log("⏳ Attempting to connect to MongoDB with mongoose...");

    const options = {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(process.env.MONGODB_URI, options);

    console.log("✅ MongoDB connected successfully!");
    console.log("Connection details:");
    console.log(`- Host: ${mongoose.connection.host}`);
    console.log(`- Database name: ${mongoose.connection.name}`);
    console.log(`- Connection state: ${mongoose.connection.readyState}`);

    // List models
    const modelNames = mongoose.modelNames();
    console.log(
      `📊 Available mongoose models: ${modelNames.join(", ") || "none"}`
    );

    // Close the connection
    await mongoose.disconnect();
    console.log("👋 MongoDB disconnected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }

  // Test direct MongoDB connection
  let mongoClient;
  try {
    console.log("\n⏳ Testing direct MongoDB connection...");
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    const options = {
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 10000,
    };

    mongoClient = new MongoClient(uri, options);
    await mongoClient.connect();
    console.log("✅ Direct MongoDB connection successful");

    // Check the database
    const db = mongoClient.db();
    const collections = await db.listCollections().toArray();
    console.log(`📊 Found ${collections.length} collections in the database`);

    // Check for users collection
    const hasUsers = collections.some((c) => c.name === "users");
    if (hasUsers) {
      console.log("✅ Found users collection");

      // Count users
      const usersCount = await db.collection("users").countDocuments();
      console.log(`👤 Found ${usersCount} users in the database`);
    } else {
      console.log("⚠️ Users collection not found");
    }
  } catch (error) {
    console.error("❌ Direct MongoDB connection failed:", error);
  } finally {
    if (mongoClient) {
      await mongoClient.close();
      console.log("👋 Closed direct MongoDB connection");
    }
  }
  console.log("\n===== CONNECTION TESTS COMPLETED =====\n");
}

// Run the test
testConnection();

testConnection();
