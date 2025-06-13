import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Blog from "@/models/Blog";
import mongoose from "mongoose";

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Validate that the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID format" },
        { status: 400 }
      );
    }

    // First check if the blog exists
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Then delete it
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      throw new Error("Blog found but deletion failed");
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Delete blog error:", error);
    // Return more specific error message
    return NextResponse.json(
      { error: `Error deleting blog: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID format" },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Get blog error:", error);
    return NextResponse.json({ error: "Error fetching blog" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid blog ID format" },
        { status: 400 }
      );
    }
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const tags =
      formData
        .get("tags")
        ?.split(",")
        .map((tag) => tag.trim()) || [];
    const category = formData.get("category");
    const imageUrl = formData.get("image");

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Build update object
    const updateData = {
      title,
      content,
      tags,
      category,
    };

    // Handle image if provided
    if (imageUrl) {
      // Check if it's a Firebase Storage URL
      if (
        imageUrl.startsWith("https://firebasestorage.googleapis.com/") ||
        imageUrl.includes("firebasestorage")
      ) {
        // Save the Firebase Storage URL directly
        updateData.image = imageUrl;
        console.log("Saving Firebase Storage URL:", imageUrl);
      } else {
        // For backward compatibility
        updateData.image = imageUrl;
        console.log("Saving regular image URL:", imageUrl);
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Update blog error:", error);
    return NextResponse.json({ error: "Error updating blog" }, { status: 500 });
  }
}
