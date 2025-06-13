import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Paths that require authentication
const protectedPaths = [
  "/dashboard",
  "/my-profile",
  "/my-booking",
  "/my-favorite",
  "/my-listing",
  "/add-tour",
  "/archieve-tour",
];

// Paths that are only accessible to non-authenticated users
const authPaths = ["/login", "/sign-up"];

// Paths that are only accessible to admin users
const adminPaths = [
  "/dashboard",
  "/my-profile",
  "/my-booking",
  "/my-bookingtailor",
  "/my-favorite",
  "/add-tour",
  "/archieve-tour",
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes to prevent CLIENT_FETCH_ERROR
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // Check if the path is for authentication
  const isAuthPath = authPaths.some((path) => pathname.startsWith(path));

  // Check if the path is for admin only
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));

  // Get the user's session token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect logic
  if (isProtectedPath) {
    // If trying to access protected route without being logged in
    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    } // If trying to access admin route without admin role
    if (isAdminPath && token.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else if (isAuthPath && token) {
    // If trying to access login/signup while logged in
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
