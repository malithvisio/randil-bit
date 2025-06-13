"use client";
import Layout from "@/components/layout/Layout";
import BrandLogoSlider from "@/components/slider/BrandLogoSlider";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Login() {
  const { loginWithCredentials } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      console.log(
        "Login attempt with email:",
        formData.email.substring(0, 3) + "..."
      );

      const result = await loginWithCredentials(
        formData.email,
        formData.password,
        "/dashboard"
      );

      if (result.success) {
        toast.success("Logged in successfully!");
      } else {
        console.error("Login failed:", result);
        setErrorMessage(result.error || "Login failed. Please try again.");
        toast.error(result.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login exception:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <div>
          <section className="login">
            <div className="tf-container">
              <div className="row">
                <div className="d-flex justify-content-center">
                  <div className="login-wrap flex">
                    <div className="image">
                      <img src="/assets/images/login/login.jpg" alt="image" />
                    </div>
                    <div className="content">
                      {" "}
                      <div className="inner-header-login">
                        <h3 className="title">Login to your account</h3>
                      </div>
                      {errorMessage && (
                        <div
                          className="alert alert-danger"
                          style={{
                            marginBottom: "20px",
                            padding: "10px 15px",
                            borderRadius: "5px",
                            color: "#721c24",
                            backgroundColor: "#f8d7da",
                            borderColor: "#f5c6cb",
                          }}
                        >
                          {errorMessage}
                        </div>
                      )}
                      <form
                        onSubmit={handleSubmit}
                        id="login"
                        className="login-user"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="input-wrap">
                              <label>Email</label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-wrap">
                              <div className="flex-two">
                                <label>Your password</label>
                              </div>
                              <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 mb-30">
                            <button
                              type="submit"
                              className="btn-submit"
                              disabled={isLoading}
                            >
                              {isLoading ? "Signing in..." : "Sign in"}
                            </button>
                          </div>
                          <div className="col-lg-12 mb-30">
                            <div className="checkbox">
                              <input
                                id="check-policy"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              {/* <label htmlFor="check-policy">
                                By signing up, you agree to Customers.ai's Terms
                                Of Service and Privacy Policy
                              </label> */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="flex-three">
                              <span className="account">
                                Don't you have an account?
                              </span>
                              <Link href="/sign-up" className="link-login">
                                Register
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
