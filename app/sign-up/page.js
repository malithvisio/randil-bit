"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      console.log("Submitting registration form...");
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      console.log("Registration response status:", response.status);

      // Safely handle response parsing
      let data = {};
      try {
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          data = await response.json();
          console.log("Registration response parsed successfully");
        } else {
          console.warn("Response is not JSON, status:", response.status);
          // Try to get text for debugging
          const text = await response.text();
          console.log("Response text:", text.substring(0, 100)); // Log first 100 chars
        }
      } catch (parseError) {
        console.error("Error parsing response:", parseError);
        throw new Error(
          "Server response could not be parsed. Please try again."
        );
      }
      if (!response.ok) {
        console.error("Registration failed with status:", response.status);
        throw new Error(
          data.error ||
            data.message ||
            `Registration failed with status ${response.status}`
        );
      }

      console.log("Registration successful");
      setMessage({
        type: "success",
        text: "Registration successful! Redirecting to login...",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        agreeToTerms: false,
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage({
        type: "error",
        text: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <div>
          <section className="login">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-wrap flex">
                    <div className="image">
                      <img src="/assets/images/login/login.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <div className="inner-header-login">
                        <h3 className="title">
                          Create an account to get started
                        </h3>
                        <div className="flex-three">
                          {/* <span className="sale">20% off</span>
													<p>get 20% off for web signup</p> */}
                        </div>
                      </div>

                      {message.text && (
                        <div
                          className={`alert ${
                            message.type === "error"
                              ? "alert-danger"
                              : "alert-success"
                          }`}
                          style={{
                            marginBottom: "20px",
                            padding: "10px 15px",
                            borderRadius: "5px",
                          }}
                        >
                          {message.text}
                        </div>
                      )}

                      <form
                        onSubmit={handleSubmit}
                        id="sign-up"
                        className="login-user"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Name</label>
                              <input
                                type="text"
                                name="name"
                                placeholder="Enter your name*"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Email</label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter your email*"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.email}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Phone Number</label>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your Phone*"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                              {errors.phone && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.phone}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Your password</label>
                              <input
                                type="password"
                                name="password"
                                placeholder="Enter your password*"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {errors.password && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.password}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-12 mb-30">
                            <button
                              type="submit"
                              className="btn-submit"
                              disabled={isLoading}
                            >
                              {isLoading ? "Processing..." : "Sign Up"}
                            </button>
                          </div>
                          <div className="col-lg-12 mb-30">
                            <div className="checkbox">
                              <input
                                id="check-policy"
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                              />
                              <label htmlFor="check-policy">
                                By signing up, you agree to Randil Lanka's Terms
                                Of Service and Privacy Policy
                              </label>
                            </div>
                            {errors.agreeToTerms && (
                              <span
                                className="error-message"
                                style={{
                                  color: "red",
                                  fontSize: "12px",
                                  display: "block",
                                  marginTop: "5px",
                                }}
                              >
                                {errors.agreeToTerms}
                              </span>
                            )}
                          </div>
                          <div className="col-md-12">
                            <div className="flex-three">
                              <span className="account">
                                Do you have an account?
                              </span>
                              <Link href="/login" className="link-login">
                                Login
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="user sign up">
        <div>
          <section className="login">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-wrap flex">
                    <div className="image">
                      <img src="/assets/images/page/sign-up.jpg" alt="image" />
                    </div>
                    <div className="content">
                      <div className="inner-header-login">
                        <h3 className="title">
                          Create an account to get started
                        </h3>
                        <div className="flex-three">
                          {/* <span className="sale">20% off</span>
													<p>get 20% off for web signup</p> */}
                        </div>
                      </div>

                      {message.text && (
                        <div
                          className={`alert ${
                            message.type === "error"
                              ? "alert-danger"
                              : "alert-success"
                          }`}
                          style={{
                            marginBottom: "20px",
                            padding: "10px 15px",
                            borderRadius: "5px",
                          }}
                        >
                          {message.text}
                        </div>
                      )}

                      <form
                        onSubmit={handleSubmit}
                        id="sign-up"
                        className="login-user"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Name</label>
                              <input
                                type="text"
                                name="name"
                                placeholder="Enter your name*"
                                value={formData.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.name}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Email</label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter your email*"
                                value={formData.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.email}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Phone Number</label>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your Phone*"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                              {errors.phone && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.phone}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-wrap">
                              <label>Your password</label>
                              <input
                                type="password"
                                name="password"
                                placeholder="Enter your password*"
                                value={formData.password}
                                onChange={handleChange}
                              />
                              {errors.password && (
                                <span
                                  className="error-message"
                                  style={{ color: "red", fontSize: "12px" }}
                                >
                                  {errors.password}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="col-lg-12 mb-30">
                            <button
                              type="submit"
                              className="btn-submit"
                              disabled={isLoading}
                            >
                              {isLoading ? "Processing..." : "Sign Up"}
                            </button>
                          </div>
                          <div className="col-lg-12 mb-30">
                            <div className="checkbox">
                              <input
                                id="check-policy"
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                              />
                              <label htmlFor="check-policy">
                                By signing up, you agree to Randil Lanka's Terms
                                Of Service and Privacy Policy
                              </label>
                            </div>
                            {errors.agreeToTerms && (
                              <span
                                className="error-message"
                                style={{
                                  color: "red",
                                  fontSize: "12px",
                                  display: "block",
                                  marginTop: "5px",
                                }}
                              >
                                {errors.agreeToTerms}
                              </span>
                            )}
                          </div>
                          <div className="col-md-12">
                            <div className="flex-three">
                              <span className="account">
                                Do you have an account?
                              </span>
                              <Link href="/login" className="link-login">
                                Login
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
