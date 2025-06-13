require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

async function checkUsers() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("Successfully connected to MongoDB");

    // Define User schema for this script
    const UserSchema = new mongoose.Schema({
      name: String,
      email: String,
      hashedPassword: String,
      phone: String,
      role: String,
    });

    // Get or create the User model
    const User = mongoose.models.User || mongoose.model("User", UserSchema);

    // List all users in database
    const users = await User.find().select("-hashedPassword");
    console.log("Users in database:", users.length);
    console.log("User details:", JSON.stringify(users, null, 2));

    // Create a test user if none exists
    if (users.length === 0) {
      console.log("No users found. Creating a test user...");
      const hashedPassword = await bcrypt.hash("password123", 10);
      const testUser = new User({
        name: "Test User",
        email: "test@example.com",
        hashedPassword: hashedPassword,
        role: "user",
      });
      await testUser.save();
      console.log("Test user created successfully");
    }
  } catch (error) {
    console.error("Database error:", error);
  } finally {
    // Close the connection
    if (mongoose.connection.readyState) {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    }
  }
}

// Run the check
checkUsers();
