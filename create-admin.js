// Script to create an admin user
// Run with: node create-admin.js

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Connect to the database
async function createAdminUser() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.);
    console.log("Connected to MongoDB");

    // Define User schema
    const userSchema = new mongoose.Schema({
      name: String,
      email: String,
      hashedPassword: String,
      role: String,
      emailVerified: Date,
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    });

    // Create User model if it doesn't exist
    const User = mongoose.models.User || mongoose.model("User", userSchema);

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: "admin@randillanka.com",
    });
    if (existingAdmin) {
      console.log("Admin user already exists!");
      await mongoose.disconnect();
      return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash("Admin@123", 10);
    const adminUser = new User({
      name: "Admin",
      email: "admin@randillanka.com",
      hashedPassword,
      role: "admin",
      emailVerified: new Date(),
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
    console.log("Email: admin@randillanka.com");
    console.log("Password: Admin@123");

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

createAdminUser();
