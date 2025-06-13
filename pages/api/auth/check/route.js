import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (session) {
      return NextResponse.json({
        authenticated: true,
        user: session.user,
        expires: session.expires,
      });
    } else {
      return NextResponse.json({
        authenticated: false,
        message: "No active session",
      });
    }
  } catch (error) {
    console.error("Auth check error:", error);
    return NextResponse.json(
      {
        authenticated: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
