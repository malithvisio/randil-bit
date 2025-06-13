import { NextResponse } from "next/server";
import { connectToDatabase } from "@/libs/mongoose";
import { User } from "@/models";
import bcrypt from "bcrypt";

// API endpoint for login
export async function POST(request: Request) {
  try {
    await connectToDatabase();

    // Parse the request body
    const body = await request.json();
    const { email, password } = body;

    console.log("Login attempt for:", email);

    // Validate input
    if (!email || !password) {
      console.log("Missing email or password");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email);
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.hashedPassword) {
      console.log("User has no password:", email);
      return NextResponse.json(
        { error: "Invalid account type. Please use social login." },
        { status: 401 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      console.log("Invalid password for:", email);
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    console.log("Login successful for:", email);

    // Create a safe user object (without password)
    const safeUser = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt ? user.createdAt.toISOString() : null,
      updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
    };

    // Return success with user data
    return NextResponse.json({
      success: true,
      user: safeUser,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
rect to this 