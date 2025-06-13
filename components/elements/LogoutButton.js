"use client";

import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function LogoutButton({ className = "", showIcon = true }) {
  const { logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`logout-button ${className}`}
    >
      {showIcon && <i className="icon-log-out mr-2"></i>}
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
}
