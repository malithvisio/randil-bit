import { connectToDatabase } from "@/libs/mongoose";
import Destination from "@/models/Destination";
import { NextResponse } from "next/server"; 


// Add a connection retry mechanism
async function connectWithRetry(retries = 3, delay = 1000) {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      await connectToDatabase();
      console.log(`DB Connected successfully on attempt ${i + 1}`);
      return true;
    } catch (error) {
      lastError = error;
      console.warn(`DB Connection attempt ${i + 1} failed: ${error.message}`);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

export async function GET(request) {
    console.log("Destinations API: GET request received");

  try {
    await connectWithRetry();
    console.log("DB Connected");

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit"))
      : null;
    const sort = searchParams.get("sort") || "createdAt";
    const order = searchParams.get("order") || "desc";
    const status = searchParams.get("status");

    let query = {};
    if (status && ["Active", "Inactive"].includes(status)) {
      query.status = status;
    }
    console.log("Query filter:", query);

    const sortObj = {};
    sortObj[sort] = order === "desc" ? -1 : 1;

    let destinationsQuery = Destination.find(query).sort(sortObj);
    if (limit) {
      destinationsQuery = destinationsQuery.limit(limit);
    }

     // Add error handling for the database query itself
    try {
      const destinations = await destinationsQuery.lean().exec();
      console.log(`Successfully fetched ${destinations.length} destinations`);
      
      // Return empty array instead of null if no destinations found
      return NextResponse.json(destinations || []);
    } catch (queryError) {
      console.error("Query execution error:", queryError);
      throw new Error(`Database query failed: ${queryError.message}`);
    }
  } catch (error) {
    console.error("🔥 Error fetching destinations:", error);

    // More detailed error logging
    if (error.name === "MongooseError" || error.name === "MongoError") {
      console.error("MongoDB connection error:", error.message);
    }
    // More detailed error logging
    if (error.name === "MongooseError" || error.name === "MongoError") {
      console.error("MongoDB connection error:", error.message);
    }

    return NextResponse.json(
       { 
        error: "Failed to fetch destinations", 
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

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

export async function PUT(request) {
  try {
    await connectToDatabase();

    const data = await request.json();
    const { id } = data;

    if (!id) {
      return NextResponse.json(
        { error: "Destination ID is required" },
        { status: 400 }
      );
    }

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

    // Update destination
    const destination = await Destination.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!destination) {
      return NextResponse.json(
        { error: "Destination not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(destination);
  } catch (error) {
    console.error("Error updating destination:", error);
    return NextResponse.json(
      { error: "Failed to update destination" },
      { status: 500 }
    );
  }
}
