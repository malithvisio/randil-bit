import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    let { name } = params;

    // Decode the URL-encoded name
    name = decodeURIComponent(name);

    // Find destination by name - case insensitive and escape special regex characters
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const destination = await Destination.findOne({
      name: { $regex: new RegExp(`^${escapedName}$`, "i") },
    });

    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);
  } catch (error) {
    console.error("Get destination error:", error);
    return NextResponse.json(
      { error: "Error fetching destination" },
      { status: 500 }
    );
  }
}
