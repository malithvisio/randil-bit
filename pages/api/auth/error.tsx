import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const errorMessages = {
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

export default function Error() {
  const router = useRouter();
  const { error } = router.query;
  const [errorMessage, setErrorMessage] = useState("An error occurred");

  useEffect(() => {
    // Log the error
    console.error("Authentication error:", error);

    // Set detailed error message
    let errorKey: string | undefined;
    if (Array.isArray(error)) {
      errorKey = error[0];
    } else if (typeof error === "string") {
      errorKey = error;
    }

    const message = errorKey
      ? errorMessages[errorKey as keyof typeof errorMessages] || `Error: ${errorKey}`
      : errorMessages.Default;
    setErrorMessage(message);

    // Redirect to login page after a short delay
    const redirectTimer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [error, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        <p className="mb-4 text-gray-700">{errorMessage}</p>
        <p className="text-gray-500">
          Redirecting to login page in 3 seconds...
        </p>
      </div>
    </div>
  );
}
