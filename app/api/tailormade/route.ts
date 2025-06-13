import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import TourRequest from "@/models/TourRequest";

// GET endpoint to fetch tour requests
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to view tour requests" },
        { status: 401 }
      );
    }

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI!);
    } // Get userId from session (next-auth stores it in id)
    const userId = session.user.id;
    const tours = await TourRequest.find({
      userId: userId,
    })
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    return NextResponse.json(tours);
  } catch (error: any) {
    console.error("Error fetching tour requests:", error);
    return NextResponse.json(
      { message: error.message || "Error fetching tour requests" },
      { status: 500 }
    );
  }
}

// POST endpoint to create a new tour request
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    const body = await request.json();

    // Add user information if logged in, otherwise mark as guest submission
    if (session?.user) {
      body.userId = session.user.id;
      body.userEmail = session.user.email;
    } else {
      body.userId = "guest";
      body.userEmail = body.email; // Use the email provided in the form
    }

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "destination",
      "arrivalDate",
      "departureDate",
      "adults",
      "hotelPreference",
      "budget",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Convert dates from strings to Date objects
    body.arrivalDate = new Date(body.arrivalDate);
    body.departureDate = new Date(body.departureDate);

    // Create the tour request
    const tourRequest = await TourRequest.create(body);

    return NextResponse.json(
      { message: "Tour request submitted successfully", tour: tourRequest },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to submit tour request" },
      { status: 500 }
    );
  }
}

// PATCH endpoint to update tour request status
export async function PATCH(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to update tour requests" },
        { status: 401 }
      );
    }

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Tour request ID is required" },
        { status: 400 }
      );
    }

    const body = await request.json();

    if (!body.status) {
      return NextResponse.json(
        { message: "Status is required" },
        { status: 400 }
      );
    }
    const userId = session.user.id;
    const tourRequest = await TourRequest.findOne({ _id: id, userId })
      .lean()
      .exec();

    if (!tourRequest) {
      return NextResponse.json(
        { message: "Tour request not found" },
        { status: 404 }
      );
    }
    const updatedTour = await TourRequest.findByIdAndUpdate(
      id,
      { status: body.status },
      { new: true }
    )
      .lean()
      .exec();

    return NextResponse.json(updatedTour);
  } catch (error: any) {
    console.error("Error updating tour request:", error);
    return NextResponse.json(
      { message: error.message || "Error updating tour request" },
      { status: 500 }
    );
  }
}
