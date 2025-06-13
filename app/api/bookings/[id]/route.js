import { connectToDatabase } from "@/libs/mongoose";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function PATCH(request, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to update bookings" },
        { status: 401 }
      );
    } // Ensure database connection
    if (!mongoose.connections[0].readyState) {
      await connectToDatabase();
    }

    // Validate bookingId
    const { id } = params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid booking ID" },
        { status: 400 }
      );
    }

    const data = await request.json();
    if (
      !data.status ||
      !["pending", "processing", "confirmed", "cancelled"].includes(data.status)
    ) {
      return NextResponse.json(
        { message: "Invalid status value" },
        { status: 400 }
      );
    } // Find the booking and verify ownership
    const booking = await Booking.findOne({
      _id: id,
      userId: session.user.id || session.user._id || session.user.sub,
    }).select("+packageId +packageTitle +tourPackage");

    if (!booking) {
      return NextResponse.json(
        {
          message:
            "Booking not found or you don't have permission to update it",
        },
        { status: 404 }
      );
    }

    // Check if the booking can be cancelled (only pending bookings can be cancelled)
    if (data.status === "cancelled" && booking.status !== "pending") {
      return NextResponse.json(
        { message: "Only pending bookings can be cancelled" },
        { status: 400 }
      );
    } // Update the booking using findByIdAndUpdate to maintain all fields
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status: data.status },
      { new: true, runValidators: false }
    );
    return NextResponse.json({
      message: "Booking updated successfully",
      booking: updatedBooking,
    });
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { message: error.message || "Error updating booking" },
      { status: 500 }
    );
  }
}
