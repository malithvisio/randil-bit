"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const errorMessages: Record<string, string> = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "You do not have access to this resource.",
  Verification: "The verification link may have been used or is invalid.",
  Default: "An authentication error occurred.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  SessionRequired: "Please sign in to access this page.",
  OAuthSignin: "Error signing in with the OAuth provider.",
  OAuthCallback: "Error during OAuth callback.",
  OAuthCreateAccount: "Error creating an account with the OAuth provider.",
  EmailCreateAccount: "Error creating an account with the email provider.",
  Callback: "Error during callback processing.",
};

export default function AuthError({
  error = "",
  statusCode = 400,
}: {
  error?: string;
  statusCode?: number;
}) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("An error occurred");
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    // Log the error
    console.error("Authentication error:", error, "Status code:", statusCode);

    // Set detailed error message
    if (error && error in errorMessages) {
      setErrorMessage(errorMessages[error]);
    } else if (error) {
      setErrorMessage(`Error: ${error}`);
    } else {
      setErrorMessage(errorMessages.Default);
    }

    // Countdown timer
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [error, statusCode, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="mb-4 text-gray-700">{errorMessage}</p>
        <p className="text-gray-500">
          Redirecting to login page in {seconds} seconds...
        </p>
      </div>
    </div>
  );
}
