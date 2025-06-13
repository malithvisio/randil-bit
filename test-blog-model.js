"use strict";
// Script to verify MongoDB connection and Blog model
require("dotenv").config();
const mongoose = require("mongoose");

async function testBlogModel() {
  try {
    console.log("\n===== TESTING BLOG MODEL & DATABASE CONNECTION =====\n");

    // Get the MongoDB connection string
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    console.log(
      `Connecting to MongoDB at ${MONGODB_URI.substring(
        0,
        MONGODB_URI.indexOf("@") > 0 ? MONGODB_URI.indexOf("@") : 10
      )}...`
    );

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    console.log("✅ MongoDB connected successfully!");
    console.log(`Database name: ${mongoose.connection.name}`);

    // Define Blog schema if not already defined
    const blogSchema = new mongoose.Schema({
      title: { type: String, required: true },
      content: { type: String, required: true },
      image: {
        type: String,
        required: false,
        default: "/assets/images/blog/default.jpg",
      },
      tags: [{ type: String }],
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    });

    // Check if Blog model exists and create it if not
    const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

    // Count blogs
    const blogCount = await Blog.countDocuments();
    console.log(`📊 Found ${blogCount} blogs in the database`);

    if (blogCount > 0) {
      // List some blogs
      const blogs = await Blog.find().limit(5).populate("author", "name");
      console.log("\nRecent blogs:");
      blogs.forEach((blog, index) => {
        console.log(
          `${index + 1}. ${blog.title} by ${
            blog.author?.name || "Unknown"
          } (created: ${blog.createdAt.toISOString()})`
        );
      });
    } else {
      console.log("⚠️ No blogs found in the database");

      // Find a user to associate with a new test blog
      const User =
        mongoose.models.User ||
        mongoose.model(
          "User",
          new mongoose.Schema({
            name: String,
            email: String,
          })
        );

      const users = await User.find().limit(1);
      if (users.length > 0) {
        console.log("\nCreating a test blog...");

        // Create a test blog
        const testBlog = new Blog({
          title: "Test Blog Post",
          content:
            "This is a test blog post created by the verification script.",
          tags: ["test", "verification"],
          author: users[0]._id,
        });

        await testBlog.save();
        console.log("✅ Test blog created successfully!");
      } else {
        console.log("⚠️ No users found to create a test blog");
      }
    }
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    // Close the database connection
    if (mongoose.connection) {
      await mongoose.disconnect();
      console.log("👋 MongoDB disconnected");
    }

    console.log("\n===== TEST COMPLETED =====\n");
  }
}

// Run the test
testBlogModel();
