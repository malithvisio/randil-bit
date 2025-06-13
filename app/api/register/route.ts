import { User } from "@/models";
import { connectToDatabase } from "@/libs/mongoose";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    // Parse request body safely
    const body = await request.json();

    console.log("Request body:", body);

    // Extract and validate fields
    const { name, email, password } = body;
    console.log("sssssssssssssssss", password);

    if (!name || !email || !password) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("55555555555", name);
    // Check for existing user
    const existingUser = await User.findOne({ email });

    console.log("RexistingUser", existingUser);

    if (existingUser) {
      return Response.json({ error: "Email already in use" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Log name, email, and hashedPassword
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Hashed Password:", hashedPassword);

    // Create user
    const user = await User.create({
      name,
      email,
      hashedPassword,
      image: "",
      role: "USER",
    });

    console.log("User created:", user);
    // Return success without sending the entire user object
    return Response.json({ success: true, userId: user._id }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    // Handle errors
    return Response.json({ error: "Registration failed" }, { status: 500 });
  }
}
