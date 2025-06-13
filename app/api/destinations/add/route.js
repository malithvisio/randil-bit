import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();

    const data = await request.json();

    // Validate required fields
    if (!data.name) {
      return NextResponse.json(
        { error: "Destination name is required" },
        { status: 400 }
      );
    }

    if (!data.descriptionTop) {
      return NextResponse.json(
        { error: "Top description is required" },
        { status: 400 }
      );
    }

    // Create destination
    const destination = new Destination(data);
    await destination.save();

    return NextResponse.json(destination);
  } catch (error) {
    console.error("Error creating destination:", error);
    return NextResponse.json(
      { error: "Failed to create destination" },
      { status: 500 }
    );
  }
}
