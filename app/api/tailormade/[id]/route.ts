import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import TourRequest from "@/models/TourRequest";

// GET a single tour request
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
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
    }

    const userId = session.user.id;
    const tour = await TourRequest.findOne({
      _id: params.id,
      userId: userId,
    })
      .lean()
      .exec();

    if (!tour) {
      return NextResponse.json(
        { message: "Tour request not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tour);
  } catch (error: any) {
    console.error("Error fetching tour request:", error);
    return NextResponse.json(
      { message: error.message || "Error fetching tour request" },
      { status: 500 }
    );
  }
}

// PATCH update a tour request
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    const body = await request.json();
    const userId = session.user.id;

    const tour = await TourRequest.findOne({
      _id: params.id,
      userId: userId,
    })
      .lean()
      .exec();

    if (!tour) {
      return NextResponse.json(
        { message: "Tour request not found" },
        { status: 404 }
      );
    }

    const updatedTour = await TourRequest.findByIdAndUpdate(
      params.id,
      { $set: body },
      { new: true, runValidators: true }
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

// DELETE a tour request
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to delete tour requests" },
        { status: 401 }
      );
    }

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    const userId = session.user.id;
    const tour = await TourRequest.findOne({
      _id: params.id,
      userId: userId,
    })
      .lean()
      .exec();

    if (!tour) {
      return NextResponse.json(
        { message: "Tour request not found" },
        { status: 404 }
      );
    }

    await TourRequest.findByIdAndDelete(params.id).exec();

    return NextResponse.json(
      { message: "Tour request deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting tour request:", error);
    return NextResponse.json(
      { message: error.message || "Error deleting tour request" },
      { status: 500 }
    );
  }
}
