import { destinationUtils } from "@/lib/firebase/destination.utils";
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

    // Handle main image upload if present
    const mainImage = formData.get("image");
    let mainImageUrl = "";

    if (mainImage) {
      const buffer = await mainImage.arrayBuffer();
      const fileName = `${Date.now()}_${mainImage.name}`;
      const blob = new Blob([buffer]);
      mainImageUrl = await destinationUtils.uploadDestinationImage(
        blob,
        fileName
      );
    }

    // Handle secondary image upload if present
    const secondaryImage = formData.get("secondaryImage");
    let secondaryImageUrl = "";

    if (secondaryImage) {
      const buffer = await secondaryImage.arrayBuffer();
      const fileName = `${Date.now()}_secondary_${secondaryImage.name}`;
      const blob = new Blob([buffer]);
      secondaryImageUrl = await destinationUtils.uploadDestinationImage(
        blob,
        fileName
      );
    }

    // Get other destination data
    const name = formData.get("name");
    const descriptionTop = formData.get("descriptionTop");
    const descriptionBottom = formData.get("descriptionBottom");
    const status = formData.get("status") || "Active";

    // Validate required fields
    if (!name || !descriptionTop || !descriptionBottom) {
      return NextResponse.json(
        { error: "Name and descriptions are required" },
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
