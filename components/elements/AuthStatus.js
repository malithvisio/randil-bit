"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function AuthStatus() {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="auth-loading">Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="auth-logged-in">
        <div className="user-info">
          <span className="user-greeting">
            Welcome, {user?.name?.split(" ")[0]}
          </span>
          <div className="user-actions">
            <Link href="/dashboard" className="dashboard-link">
              <i className="icon-dashboard mr-1"></i>
              Dashboard
            </Link>
            <LogoutButton className="auth-logout-btn" showIcon={false} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-logged-out">
      <Link href="/login" className="login-link">
        <i className="icon-user-1 mr-1"></i>
        Login
      </Link>
      <Link href="/sign-up" className="signup-link">
        <i className="icon-plus mr-1"></i>
        Register
      </Link>
    </div>
  );
}
