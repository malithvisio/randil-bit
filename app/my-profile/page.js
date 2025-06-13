"use client";

import LayoutAdmin from "@/components/layout/LayoutAdmin";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { user, isAdmin, isAuthenticated } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Redirect non-admin users to home page
  useEffect(() => {
    if (isAuthenticated && user && user.role !== "admin") {
      toast.error("Access restricted. Admin privileges required.");
      router.push("/");
    }
  }, [isAuthenticated, user, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    try {
      // Validate passwords
      if (formData.newPassword !== formData.confirmPassword) {
        throw new Error("New passwords do not match");
      }

      if (formData.newPassword.length < 6) {
        throw new Error("New password must be at least 6 characters long");
      }

      const response = await fetch('/api/passwordchange', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Clear form and show success message
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setSuccess(true);
      toast.success("Password updated successfully!");
    } catch (err) {
      console.error("Error changing password:", err);
      setError(err.message);
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <LayoutAdmin headerStyle={1} footerStyle={1}>
      <section className="profile-dashboard">
        <div className="inner-header mb-40">
          <h3 className="title">My Profile</h3>
          <p className="des">Update your profile information</p>
          {isAdmin && (
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded mt-2">
              <span className="font-medium">Admin Access:</span> This page is
              restricted to administrators only.
            </div>
          )}
        </div>

        <div className="infomation-dashboard mb-70">
          <h4 className="title">User Information</h4>
          <div className="widget-dash-board">
            <div className="grid-input-2">
              <div className="input-wrap">
                <label>Email address*</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handlePasswordChange}
          className="infomation-dashboard mb-70"
        >
          <h4 className="title">Change Password</h4>
          <div className="widget-dash-board">
            {error && (
              <div className="alert alert-danger mb-4" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success mb-4" role="alert">
                Password updated successfully!
              </div>
            )}
            <div className="grid-input-1">
              <div className="input-wrap">
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter your current password"
                  required
                />
              </div>
            </div>
            <div className="grid-input-2">
              <div className="input-wrap">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="input-wrap">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </div>
            <div className="flex mt-4 mb-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </button>
            </div>
            <p className="mt-20 text-sm text-gray-600">
              *Note: Password must be at least 6 characters long. Remember to
              keep your password safe!
            </p>
          </div>
        </form>
      </section>
    </LayoutAdmin>
  );
}
