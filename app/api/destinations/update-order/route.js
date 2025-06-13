import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";

export async function POST(request) {
  try {
    await connectToDatabase();

    const data = await request.json();

    if (!Array.isArray(data.destinations)) {
      return NextResponse.json(
        { error: "Invalid data format. Expected an array of destinations." },
        { status: 400 }
      );
    }

    // Update each destination's order in the database
    const updatePromises = data.destinations.map(async (dest, index) => {
      if (!dest._id) {
        throw new Error(`Missing _id for destination at index ${index}`);
      }

      return Destination.findByIdAndUpdate(
        dest._id,
        { $set: { order: index } },
        { new: true }
      );
    });

    await Promise.all(updatePromises);

    return NextResponse.json(
      { message: "Destination order updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating destination order:", error);
    return NextResponse.json(
      { error: "Failed to update destination order" },
      { status: 500 }
    );
  }
}
