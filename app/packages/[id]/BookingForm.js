"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";

const BookingForm = () => {
  const router = useRouter();
  const params = useParams();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [packageData, setPackageData] = useState(null);
  const [formData, setFormData] = useState({
    packageId: "", // Add package ID
    packageTitle: "", // Adding package title field
    packageDuration: "", // Add package duration
    packageDestination: "", // Add package destination
    arrivalDate: "",
    departureDate: "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    country: "",
    adults: "1",
    children: "0",
    tourPackage: "Package Tour", // Set default tour package
    message: "",
  });

  // Fetch package details when component mounts
  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        if (params.id) {
          // Get package name from URL parameter and format it
          const packageNameFromUrl = params.id.replace(/-/g, " "); // Convert "Explore-Colombo-Galle" to "Explore Colombo Galle"

          // First set the package name from URL
          setFormData((prev) => ({
            ...prev,
            packageId: params.id,
            packageTitle: packageNameFromUrl,
          }));

          // Then try to fetch additional details from API
          const response = await fetch(`/api/packages/${params.id}`);
          if (response.ok) {
            const data = await response.json();
            setPackageData(data);
            setFormData((prev) => ({
              ...prev,
              packageId: params.id,
              packageTitle: data.title || packageNameFromUrl,
              packageDuration: data.duration || "",
              packageDestination: data.destination || "",
              tourPackage: data.tourType || "Package Tour",
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageDetails();
  }, [params.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user makes changes
  };

  const validateForm = () => {
    // Required fields
    const requiredFields = [
      "packageTitle",
      "arrivalDate",
      "departureDate",
      "firstName",
      "lastName",
      "contactNumber",
      "email",
      "country",
      "adults",
      "tourPackage", // Added tour package to required fields
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setError(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return false;
    }

    // Date validation
    const arrivalDate = new Date(formData.arrivalDate);
    const departureDate = new Date(formData.departureDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(arrivalDate.getTime()) || isNaN(departureDate.getTime())) {
      setError("Please enter valid dates");
      return false;
    }

    if (arrivalDate < today) {
      setError("Arrival date cannot be in the past");
      return false;
    }

    if (departureDate <= arrivalDate) {
      setError("Departure date must be after arrival date");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    // Phone number validation
    const phoneRegex = /^[0-9+\s-]{10,}$/;
    if (!phoneRegex.test(formData.contactNumber)) {
      setError("Please enter a valid contact number (minimum 10 digits)");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") {
      return;
    }    // Prepare WhatsApp message regardless of login status
    const packageName = formData.packageTitle || params.id.replace(/-/g, " ");
    const whatsappMessage = `🎯 *New Tour Inquiry*

*Package Information*
📍 Package: ${packageName}
⏱️ Duration: ${formData.packageDuration || "Not specified"}
🌍 Destination: ${formData.packageDestination || "Not specified"}
🎫 Tour Type: ${formData.tourPackage}

*Travel Dates*
📅 Arrival: ${formData.arrivalDate}
📅 Departure: ${formData.departureDate}

*Guest Information*
👤 Name: ${formData.firstName} ${formData.lastName}
📞 Contact: ${formData.contactNumber}
📧 Email: ${formData.email}
🌏 Country: ${formData.country}

*Group Size*
👥 Adults: ${formData.adults}
👶 Children: ${formData.children}

*Additional Information*
💬 Message: ${formData.message || "No additional message"}

*Inquiry Status*: ${session ? 'New Booking' : 'Pre-login Inquiry'}`;

    const phoneNumber = "94773087631"; // Business phone number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp message in new window
    window.open(whatsappURL, "_blank");

    // If not logged in, redirect to login after opening WhatsApp
    // if (!session) {
    //   const currentUrl = window.location.href;
    //   router.push("/login?callbackUrl=" + encodeURIComponent(currentUrl));
    //   return;
    // }

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("Submitting booking data:", formData); // Debug log      // Prepare the booking data with package information
      const bookingData = {
        ...formData,
        packageId: params.id,
        packageTitle: formData.packageTitle || params.id.replace(/-/g, " "),
        packageDuration: formData.packageDuration || "",
        packageDestination: formData.packageDestination || "",
        tourPackage: formData.tourPackage || "Package Tour", // Ensure tourPackage is set
      };

      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      console.log("Server response:", data); // Debug log

      // if (!response.ok) {
      //   if (response.status === 401) {
      //     router.push(
      //       "/login?callbackUrl=" + encodeURIComponent(window.location.href)
      //     );
      //     return;
      //   }

      //   throw new Error(
      //     data.details || data.message || "Failed to create booking"        );
      // } // Success!

      // Show success message and redirect
      alert("Booking created successfully!");
      // router.push("/my-booking");
    } catch (error) {
      setError(error.message);
      console.error("Booking error:", error); // Debug log
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar-widget">
      <h6 className="block-heading">Book This Tour</h6>
      <div className="package-details mb-30">
        <h4 className="package-title">{formData.packageTitle}</h4>
        {packageData && (
          <p className="text-lg">
            {packageData.duration && (
              <>
                <strong>Duration:</strong> {packageData.duration}
                <br />
              </>
            )}
            {packageData.destination && (
              <>
                <strong>Destination:</strong> {packageData.destination}
              </>
            )}
          </p>
        )}
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} id="form-book-tour">
        {" "}
        <div className="input-wrap mb-30">
          <label>Arrival Date:</label>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="form-control"
            required
          />
        </div>
        <div className="input-wrap mb-30">
          <label>Departure Date:</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            min={formData.arrivalDate || new Date().toISOString().split("T")[0]}
            className="form-control"
            required
          />
        </div>{" "}
        <div className="input-wrap mb-30">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="input-wrap mb-30">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>{" "}
        <div className="input-wrap mb-30">
          <label>Contact Number:</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            pattern="[0-9+\s-]+"
            minLength={10}
            className="form-control"
            required
          />
        </div>
        <div className="input-wrap mb-30">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>{" "}
        <div className="input-wrap mb-30">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="input-wrap mb-30">
          <label>Tour Package:</label>
          <div className="select-wrapper">
            <select
              name="tourPackage"
              value={formData.tourPackage}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select Tour Package</option>
              <option value="Day Tour">Day Tour</option>
              <option value="Package Tour">Package Tour</option>
              <option value="Tailor Made Tour">Tailor Made Tour</option>
              <option value="Private Tour">Private Tour</option>
            </select>
            <i className="icon-arrow-down"></i>
          </div>
        </div>{" "}
        <div className="input-wrap mb-30">
          <label>Number of Adults:</label>
          <input
            type="number"
            name="adults"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="input-wrap mb-30">
          <label>Number of Children:</label>
          <input
            type="number"
            name="children"
            min="0"
            value={formData.children}
            onChange={handleChange}
            className="form-control"
          />
        </div>{" "}
        <div className="input-wrap mb-30">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading || status === "loading"}
          className={`btn-primary w-100 ${loading ? "disabled" : ""}`}
        >
          {loading ? "Processing..." : "Proceed Booking"}
        </button>
      </form>{" "}
      <style jsx>{`
        .select-wrapper {
          position: relative;
          width: 100%;
        }

        .select-wrapper select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 100%;
          background-color: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 12px 15px;
          padding-right: 40px;
          font-size: 1rem;
          cursor: pointer;
        }

        .select-wrapper i {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #2563eb;
          pointer-events: none;
          transition: transform 0.3s ease;
        }

        .select-wrapper select:focus {
          border-color: #2563eb;
          outline: none;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        .select-wrapper select:focus + i {
          transform: translateY(-50%) rotate(180deg);
        }

        .form-control {
          display: block;
          width: 100%;
          padding: 12px 15px;
          font-size: 1rem;
          line-height: 1.5;
          color: #1e293b;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }

        .form-control:focus {
          border-color: #2563eb;
          outline: 0;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        .btn-primary {
          display: inline-block;
          font-weight: 600;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          user-select: none;
          border: 1px solid transparent;
          padding: 12px 25px;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 6px;
          transition: all 0.15s ease-in-out;
          background-color: #2563eb;
          color: #ffffff;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #1d4ed8;
        }

        .btn-primary.disabled,
        .btn-primary:disabled {
          opacity: 0.65;
          pointer-events: none;
          background-color: #93c5fd;
        }

        .w-100 {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default BookingForm;
