"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authInitialized, setAuthInitialized] = useState(false);

  // Track whether auth has initialized to prevent premature error states
  useEffect(() => {
    if (status !== "loading") {
      setAuthInitialized(true);
    }
  }, [status]);

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const user = session?.user;

  const isAdmin = user?.role === "admin";

  const loginWithCredentials = useCallback(
    async (email, password, redirectUrl = "/dashboard") => {
      try {
        console.log("Attempting login with credentials:", { email });

        if (!email || !password) {
          return {
            success: false,
            error: "Email and password are required",
          };
        }
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        console.log("Login result:", {
          ok: result?.ok,
          error: result?.error,
          status: result?.status,
        });

        // Check for successful login (no error and ok status)
        if (!result?.error && result?.ok) {
          router.push(redirectUrl);
          router.refresh();
          return { success: true };
        }

        // Handle login failure with specific error messages
        let errorMessage = "Login failed. Please check your credentials.";

        if (result?.error === "CredentialsSignin") {
          errorMessage = "Invalid email or password.";
        } else if (result?.status === 401) {
          errorMessage = "Unauthorized access. Please check your credentials.";
        } else if (result?.error) {
          errorMessage = result.error;
        }

        // Additional logging for troubleshooting Vercel deployment issues
        console.error("Login detailed error:", {
          result,
          email: email ? `${email.substring(0, 3)}...` : "missing",
          passwordProvided: password ? "yes" : "no",
        });

        console.error("Login error:", { result, errorMessage });

        return {
          success: false,
          error: errorMessage,
          status: result?.status,
          details: result?.error,
        };
      } catch (error) {
        console.error("Login exception:", error);
        return {
          success: false,
          error: "An unexpected error occurred. Please try again.",
        };
      }
    },
    [router]
  );

  const loginWithGoogle = useCallback(async (redirectUrl = "/dashboard") => {
    await signIn("google", { callbackUrl: redirectUrl });
  }, []);

  const logout = useCallback(async () => {
    await signOut({ redirect: false });
    router.push("/login");
    router.refresh();
  }, [router]);

  return {
    user,
    isLoading,
    isAuthenticated,
    authInitialized,
    isAdmin,
    loginWithCredentials,
    loginWithGoogle,
    logout,
  };
};
