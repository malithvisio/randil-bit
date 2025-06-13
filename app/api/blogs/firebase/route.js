import { blogUtils } from "@/lib/firebase/blog.utils";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Get form data
    const formData = await request.formData();

    // Handle image upload if present
    const image = formData.get("image");
    let imageUrl = "";

    if (image) {
      const buffer = await image.arrayBuffer();
      const fileName = `${Date.now()}_${image.name}`;
      const blob = new Blob([buffer]);
      imageUrl = await blogUtils.uploadBlogImage(blob, fileName);
    }

    // Get other blog data
    const title = formData.get("title");
    const content = formData.get("content");
    const author = formData.get("author") || session.user.id;
    const category = formData.get("category");
    const tags =
      formData
        .get("tags")
        ?.split(",")
        ?.map((tag) => tag.trim()) || [];

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    } // Create blog data object with proper validation
    const blogData = {
      title: title.trim(),
      content: content.trim(),
      authorId: author, // Changed from author to authorId to match the expected interface
      category: category || "Uncategorized",
      tags: Array.isArray(tags) ? tags.filter(Boolean) : [],
      imageUrl: imageUrl || "",
    };

    console.log("Creating blog with data:", JSON.stringify(blogData, null, 2));

    // Add blog to Firestore using createBlog instead of addBlog
    const result = await blogUtils.createBlog(blogData);

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog: result,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/blogs/firebase:", error);
    // Return more detailed error information
    return NextResponse.json(
      {
        error: "Internal server error firebase",
        details: error.message,
        code: error.code || "UNKNOWN_ERROR",
        path: error.path || null,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    // Parse filters from URL search params
    const { searchParams } = new URL(request.url);
    const filters = {
      category: searchParams.get("category"),
      tags: searchParams.get("tags")?.split(","),
      author: searchParams.get("author"),
    };

    // Get blogs from Firestore
    const blogs = await blogUtils.getBlogs(filters);

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error in GET /api/blogs/firebase:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
