import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to change your password" },
        { status: 401 }
      );
    }

    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    const { currentPassword, newPassword } = await request.json();
    const userId = session.user.id; // Find user
    const user = await User.findById(userId);
    if (!user || !user.hashedPassword) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    // Verify current password
    const isValid = await bcryptjs.compare(currentPassword, user.hashedPassword);
    if (!isValid) {
      return NextResponse.json(
        { message: "Current password is incorrect" },
        { status: 400 }
      );
    }

    // Hash new password and update
    const hashedPassword = await bcryptjs.hash(newPassword, 12);
    await User.findByIdAndUpdate(userId, { hashedPassword: hashedPassword });

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { message: error.message || "Error changing password" },
      { status: 500 }
    );
  }
}
