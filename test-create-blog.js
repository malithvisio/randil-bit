"use strict";
// Script to test blog creation with authentication
require("dotenv").config();
const mongoose = require("mongoose");
const { connectToDatabase } = require("./libs/mongoose");

async function createTestBlog() {
  try {
    console.log("Connecting to database...");
    await connectToDatabase();

    // Check if Blog model exists
    if (!mongoose.models.Blog) {
      // Create Blog model schema if not already defined
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

      mongoose.model("Blog", blogSchema);
    }

    const Blog = mongoose.models.Blog;

    // Get a user from the database to use as author
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
    if (!users.length) {
      throw new Error("No users found in database. Create a user first.");
    }

    // Create a test blog
    const testBlog = {
      title: "Test Blog " + new Date().toISOString(),
      content: "This is a test blog post created by the test script.",
      tags: ["test", "debug"],
      author: users[0]._id,
      image: "/assets/images/blog/default.jpg",
    };

    console.log("Creating test blog with data:", testBlog);
    const blog = await Blog.create(testBlog);

    console.log("Test blog created successfully:", blog);

    // List all blogs
    const allBlogs = await Blog.find().populate("author", "name");
    console.log(`Found ${allBlogs.length} blogs in the database:`);
    allBlogs.forEach((blog, index) => {
      console.log(
        `${index + 1}. ${blog.title} by ${blog.author?.name || "Unknown"} (${
          blog._id
        })`
      );
    });
  } catch (error) {
    console.error("Error creating test blog:", error);
  } finally {
    // Close the database connection
    await mongoose.disconnect();
    console.log("Database connection closed");
  }
}

createTestBlog();
