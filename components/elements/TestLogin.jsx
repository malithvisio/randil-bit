"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-hot-toast";

export default function TestLogin() {
  const { loginWithCredentials } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleTestLogin = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      // Use test user credentials
      const loginResult = await loginWithCredentials(
        "test@example.com",
        "password123",
        "/dashboard"
      );

      setResult(loginResult);

      if (loginResult.success) {
        toast.success("Test login successful!");
      } else {
        toast.error(`Test login failed: ${loginResult.error}`);
      }
    } catch (error) {
      console.error("Test login error:", error);
      toast.error("Test login error. See console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleTestLogin}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isLoading ? "Testing..." : "Test Login with Demo Account"}
      </button>

      {result && (
        <div className="mt-4 p-4 rounded border">
          <h3 className="font-semibold">Login Result:</h3>
          <pre className="mt-2 bg-gray-100 p-2 rounded overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
