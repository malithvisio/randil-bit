import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Blog from "@/models/Blog";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

// Helper function to safely connect to database with error handling
async function safeConnectDB() {
  try {
    await connectToDatabase();
    return { success: true };
  } catch (error) {
    console.error("Database connection failed:", error);
    return {
      success: false,
      error: error.message || "Failed to connect to database",
    };
  }
}

export async function POST(req) {
  console.log("API: POST /api/blogs request received");

  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    console.log("User session:", session);

    // Connect to database with better error handling
    const connection = await safeConnectDB();
    if (!connection.success) {
      return NextResponse.json(
        { error: "Database connection failed", details: connection.error },
        { status: 500 }
      );
    }

    // Get form data
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const tags =
      formData
        .get("tags")
        ?.split(",")
        .map((tag) => tag.trim()) || [];
    const imageUrl = formData.get("image");

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Use the Firebase Storage URL if provided, otherwise use default image
    const finalImageUrl = imageUrl || "/assets/images/blog/default.jpg";

    // Log the data we're about to save
    console.log("Creating blog with data:", {
      title,
      contentLength: content?.length,
      tags,
      imageUrl: finalImageUrl,
      authorId: session.user.id,
    }); // Create blog post
    const blog = await Blog.create({
      title,
      content,
      tags: tags.filter((tag) => tag), // Remove empty tags
      image: finalImageUrl, // Save the Firebase Storage URL
      author: session.user.id,
    });

    console.log("Blog created successfully:", blog);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Error creating blog post" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  console.log("API: GET /api/blogs request received");

  try {
    // Connect to database with better error handling
    const connection = await safeConnectDB();
    if (!connection.success) {
      return NextResponse.json(
        { error: "Database connection failed", details: connection.error },
        { status: 500 }
      );
    }

    console.log("API: Database connected successfully, querying blogs");

    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit"))
      : null;
    const page = searchParams.get("page")
      ? parseInt(searchParams.get("page"))
      : 1;

    // Query blogs
    let blogsQuery = Blog.find()
      .sort({ createdAt: -1 })
      .populate("author", "name");

    if (limit) {
      const skip = (page - 1) * limit;
      blogsQuery = blogsQuery.skip(skip).limit(limit);
    }

    const blogs = await blogsQuery.lean();
    console.log(`API: Found ${blogs.length} blogs`);

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);

    // Enhanced error reporting
    const errorInfo = {
      message: error.message,
      name: error.name,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    };

    return NextResponse.json(
      { error: "Error fetching blogs", details: errorInfo },
      { status: 500 }
    );
  }
}
