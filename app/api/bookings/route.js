import { connectToDatabase } from "@/libs/mongoose";
import Booking from "@/models/Booking";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function POST(request) {
  console.log("Starting booking creation process...");
  try {
    const session = await getServerSession(authOptions);
    console.log("Full session data:", JSON.stringify(session, null, 2));

    if (!session || !session.user) {
      console.log("No session or user found");
      return NextResponse.json(
        { message: "You must be logged in to make a booking" },
        { status: 401 }
      );
    }

    // Log user data for debugging
    console.log("User data from session:", {
      id: session.user.id,
      _id: session.user._id,
      sub: session.user.sub,
      email: session.user.email,
    }); // Ensure database connection
    await connectToDatabase();

    const data = await request.json();
    console.log("Received booking data:", data);

    // Get the user's ID with fallbacks
    const userId = session.user.id || session.user._id || session.user.sub;

    if (!userId) {
      console.error("No valid user ID found in session:", session);
      return NextResponse.json(
        { message: "Invalid user session. Please log out and log in again." },
        { status: 400 }
      );
    }

    // Add userId to the booking data
    const bookingData = {
      ...data,
      userId: new mongoose.Types.ObjectId(userId),
    };

    // Validate required fields
    const requiredFields = [
      "packageId",
      "packageTitle",
      "tourPackage",
      "arrivalDate",
      "departureDate",
      "firstName",
      "lastName",
      "contactNumber",
      "email",
      "country",
      "adults",
    ];
    const missingFields = requiredFields.filter((field) => !bookingData[field]);

    if (missingFields.length > 0) {
      console.log("Missing required fields:", missingFields);
      return NextResponse.json(
        {
          message: "Validation error",
          details: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    // Parse and validate dates
    const arrivalDate = new Date(bookingData.arrivalDate);
    const departureDate = new Date(bookingData.departureDate);

    if (isNaN(arrivalDate.getTime()) || isNaN(departureDate.getTime())) {
      return NextResponse.json(
        {
          message: "Validation error",
          details: "Invalid date format",
        },
        { status: 400 }
      );
    }

    if (departureDate <= arrivalDate) {
      return NextResponse.json(
        {
          message: "Validation error",
          details: "Departure date must be after arrival date",
        },
        { status: 400 }
      );
    }

    // Update the dates in bookingData
    bookingData.arrivalDate = arrivalDate;
    bookingData.departureDate = departureDate;

    console.log("Creating booking with data:", bookingData);
    const booking = await Booking.create(bookingData);
    console.log("Booking created successfully:", booking);

    return NextResponse.json(
      { message: "Booking created successfully", booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation error:", error);

    // Handle specific mongoose errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );
      console.log("Validation errors:", errorMessages);
      return NextResponse.json(
        {
          message: "Validation error",
          details: errorMessages,
        },
        { status: 400 }
      );
    }

    // Handle mongo casting errors (invalid ObjectId etc)
    if (error instanceof mongoose.Error.CastError) {
      return NextResponse.json(
        {
          message: "Validation error",
          details: `Invalid ${error.path}: ${error.value}`,
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        message: "Error creating booking",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("GET /api/bookings session:", session);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to view bookings" },
        { status: 401 }
      );
    } // Ensure database connection
    await connectToDatabase();
    const userId = session.user.id || session.user._id || session.user.sub;
    console.log("Searching for bookings with userId:", userId);

    const bookings = await Booking.find({
      userId: userId,
    }).sort({ createdAt: -1 });

    console.log("Found bookings:", bookings);
    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { message: error.message || "Error fetching bookings" },
      { status: 500 }
    );
  }
}
