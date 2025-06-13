import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import { User } from "@/models";
import bcrypt from "bcrypt";

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
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}

export async function GET(request: NextRequest) {
  try {
    console.log("Users API: GET request received");
    await connectWithRetry();
    console.log("DB Connected for GET /api/users");

    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    let query = {};
    if (email) {
      query = { email };
    }

    const users = await User.find(query).select("-hashedPassword");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);

    // More detailed error logging
    if (error.name === "MongooseError" || error.name === "MongoError") {
      console.error("MongoDB connection error:", error.message);
    }

    return NextResponse.json(
      {
        error: "Failed to fetch users",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  console.log("Users API: POST request received");

  try {
    await connectWithRetry();
    console.log("DB Connected for POST /api/users");

    // Validate request has a body before trying to parse it
    let body;
    try {
      body = await request.json();
      console.log("Request body successfully parsed");
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request body", message: parseError.message },
        { status: 400 }
      );
    }

    const { name, email, phone, password, role } = body;

    // Validate required fields
    if (!name || !email || !phone || !password) {
      console.log("Validation failed: missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log("Checking if user exists with email:", email);
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("User with this email already exists");
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    console.log("Hashing password");
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    console.log("Creating new user");
    const newUser = await User.create({
      name,
      email,
      phone,
      hashedPassword,
      role: role || "user",
    });

    // Remove the password from the response
    console.log("User created successfully:", newUser._id);
    const user = { ...newUser.toObject() };
    delete user.hashedPassword;

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);

    // More detailed error logging
    if (error.name === "MongooseError" || error.name === "MongoError") {
      console.error("MongoDB connection error:", error.message);
    }

    return NextResponse.json(
      {
        error: "Failed to create user",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
