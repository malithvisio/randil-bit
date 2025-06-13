import { connectToDatabase } from "@/libs/mongoose";
import Booking from "@/models/Booking";
import TourRequest from "@/models/TourRequest";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to view statistics" },
        { status: 401 }
      );
    }

    await connectToDatabase();

    // Get booking counts
    const [
      totalBookings,
      pendingBookings,
      processingBookings,
      confirmedBookings,
      cancelledBookings,
    ] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: "pending" }),
      Booking.countDocuments({ status: "processing" }),
      Booking.countDocuments({ status: "confirmed" }),
      Booking.countDocuments({ status: "cancelled" }),
    ]);

    // Get tour request counts
    const [
      totalRequests,
      pendingRequests,
      processingRequests,
      completedRequests,
    ] = await Promise.all([
      TourRequest.countDocuments(),
      TourRequest.countDocuments({ status: "pending" }),
      TourRequest.countDocuments({ status: "processing" }),
      TourRequest.countDocuments({ status: "completed" }),
    ]);

    // Get recent bookings and tour requests
    const [recentBookings, recentTourRequests] = await Promise.all([
      Booking.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("packageTitle status createdAt"),
      TourRequest.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("customerName email destination status createdAt"),
    ]);

    // Calculate total guests
    const guestStats = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalAdults: { $sum: "$adults" },
          totalChildren: { $sum: "$children" },
        },
      },
    ]);

    const totalGuests = guestStats[0]
      ? guestStats[0].totalAdults + guestStats[0].totalChildren
      : 0;

    return NextResponse.json({
      // Booking statistics
      totalBookings,
      pendingBookings,
      processingBookings,
      confirmedBookings,
      cancelledBookings,
      totalGuests,
      recentBookings,
      // Tour request statistics
      tourRequests: {
        total: totalRequests,
        pending: pendingRequests,
        processing: processingRequests,
        completed: completedRequests,
      },
      recentTourRequests,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return NextResponse.json(
      { message: "Error fetching statistics" },
      { status: 500 }
    );
  }
}
