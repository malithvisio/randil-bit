import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";
import mongoose from "mongoose";
import { storage } from "@/libs/firebase";
import { ref, deleteObject } from "firebase/storage";

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Destination ID is required" },
        { status: 400 }
      );
    }

    // Validate that the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid destination ID format" },
        { status: 400 }
      );
    } // First check if the destination exists
    const destination = await Destination.findById(id);
    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    } // Delete images from Firebase Storage if they exist
    const deleteFirebaseImage = async (imageUrl) => {
      if (!imageUrl || !imageUrl.includes("firebasestorage")) return;

      try {
        // Extract the path from the Firebase URL
        const urlPath = decodeURIComponent(
          imageUrl.split("/o/")[1].split("?")[0]
        );
        console.log("Attempting to delete Firebase image at path:", urlPath);

        const imageRef = ref(storage, urlPath);
        await deleteObject(imageRef);
        console.log("Successfully deleted image at path:", urlPath);
      } catch (error) {
        console.error("Error deleting image from Firebase:", error);
        // Log more details about the error
        if (error.code) console.error("Firebase error code:", error.code);
        if (error.message)
          console.error("Firebase error message:", error.message);
      }
    };

    // Delete both images if they exist
    await Promise.all([
      deleteFirebaseImage(destination.image),
      deleteFirebaseImage(destination.secondaryImage),
    ]);

    // Then delete from MongoDB
    const deletedDestination = await Destination.findByIdAndDelete(id);
    if (!deletedDestination) {
      throw new Error("Destination found but deletion failed");
    }

    return NextResponse.json({ message: "Destination deleted successfully" });
  } catch (error) {
    console.error("Delete destination error:", error);
    // Return more specific error message
    return NextResponse.json(
      { error: `Error deleting destination: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid destination ID format" },
        { status: 400 }
      );
    }

    const destination = await Destination.findById(id);
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

export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid destination ID format" },
        { status: 400 }
      );
    }

    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.descriptionTop) {
      return NextResponse.json(
        { error: "Name and top description are required" },
        { status: 400 }
      );
    }

    // Get the existing destination to check for images that need to be deleted
    const existingDestination = await Destination.findById(id);
    if (!existingDestination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    // Helper function to delete image from Firebase Storage
    const deleteFirebaseImage = async (imageUrl) => {
      if (!imageUrl || !imageUrl.includes("firebasestorage")) return;

      try {
        const urlPath = decodeURIComponent(
          imageUrl.split("/o/")[1].split("?")[0]
        );
        console.log(
          "Attempting to delete old Firebase image at path:",
          urlPath
        );
        const imageRef = ref(storage, urlPath);
        await deleteObject(imageRef);
        console.log("Successfully deleted old image at path:", urlPath);
      } catch (error) {
        console.error("Error deleting old image from Firebase:", error);
        if (error.code) console.error("Firebase error code:", error.code);
        if (error.message)
          console.error("Firebase error message:", error.message);
      }
    };

    // Delete old images if they're being replaced
    if (data.image && data.image !== existingDestination.image) {
      await deleteFirebaseImage(existingDestination.image);
    }
    if (
      data.secondaryImage &&
      data.secondaryImage !== existingDestination.secondaryImage
    ) {
      await deleteFirebaseImage(existingDestination.secondaryImage);
    }

    const updatedDestination = await Destination.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedDestination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Destination updated successfully",
      destination: updatedDestination,
    });
  } catch (error) {
    console.error("Update destination error:", error);
    return NextResponse.json(
      { error: "Error updating destination" },
      { status: 500 }
    );
  }
}
