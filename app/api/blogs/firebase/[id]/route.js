import { blogUtils } from "@/lib/firebase/blog.utils";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const blog = await blogUtils.getBlog(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error in GET /api/blogs/firebase/[id]:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { id } = params;
    const formData = await request.formData();
    let updateData = {};

    // Handle image upload if present
    const image = formData.get("image");
    if (image) {
      const buffer = await image.arrayBuffer();
      const fileName = `${Date.now()}_${image.name}`;
      const blob = new Blob([buffer]);
      const imageUrl = await blogUtils.uploadBlogImage(blob, fileName);
      updateData.imageUrl = imageUrl;
    }

    // Get other update data
    const title = formData.get("title");
    const content = formData.get("content");
    const category = formData.get("category");
    const tags =
      formData
        .get("tags")
        ?.split(",")
        .map((tag) => tag.trim()) || [];

    updateData = {
      ...updateData,
      title,
      content,
      category,
      tags,
    };

    const result = await blogUtils.updateBlog(id, updateData);

    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
      blog: result,
    });
  } catch (error) {
    console.error("Error in PUT /api/blogs/firebase/[id]:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const { id } = params;
    const blog = await blogUtils.getBlog(id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Delete the blog post
    await blogUtils.deleteBlog(id);

    // Delete associated image if it exists
    if (blog.imageUrl) {
      await blogUtils.deleteBlogImage(blog.imageUrl);
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error in DELETE /api/blogs/firebase/[id]:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
