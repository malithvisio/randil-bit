import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const destinationId = params.id;

    const data = await request.json();
    const { status } = data;

    const newStatus = status === "Active" ? "Inactive" : "Active";

    const destination = await Destination.findByIdAndUpdate(
      destinationId,
      { status: newStatus },
      { new: true }
    );

    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);
  } catch (error) {
    console.error("Error updating destination status:", error);
    return NextResponse.json(
      { error: "Failed to update destination status" },
      { status: 500 }
    );
  }
}
