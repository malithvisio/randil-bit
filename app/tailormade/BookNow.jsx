"use client";
import { countries } from "./countries";
import React, { useState } from "react";

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    arriveDate: "",
    departureDate: "",
    title: "",
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    email: "",
    adults: 0,
    infants: 0,
    children: 0,
    budget: "",
    accomodation: "",
    message: "",
    interests: {
      meal: [],
      interestside: [],
    },
    travelStyle: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "adults" || name === "children" || name === "infants"
          ? parseInt(value) || 0
          : value,
    }));
  };
  const handleCheckboxChange = (category, value) => {
    setFormData((prev) => {
      const isSelected = prev.interests[category].includes(value);
      return {
        ...prev,
        interests: {
          ...prev.interests,
          [category]: isSelected
            ? prev.interests[category].filter((item) => item !== value) // Remove if already selected
            : [value], // Replace with the selected value
        },
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      console.log("Form data being sent:", formData);

      // First, save to database
      const tourData = {
        name: `${formData.title} ${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        destination: formData.country,
        arrivalDate: formData.arriveDate,
        departureDate: formData.departureDate,
        adults: parseInt(formData.adults) || 0,
        children:
          (parseInt(formData.children) || 0) +
          (parseInt(formData.infants) || 0),
        hotelPreference: formData.accomodation,
        budget: formData.budget,
        additionalRequests: `Travel Style: ${
          formData.travelStyle || "Not specified"
        }
Meal Preferences: ${formData.interests.meal?.join(", ") || "None selected"}
Interests: ${formData.interests.interestside?.join(", ") || "None selected"}
Message: ${formData.message || ""}`,
      };

      console.log("Transformed tour data:", tourData);

      const response = await fetch("/api/tailormade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit tour request");
      }

      // If database save successful, send WhatsApp message
      const whatsappNumber = "94773087631";
      const message = `*Tailor Made Booking Details*:
- Arrive Date: ${formData.arriveDate}
- Departure Date: ${formData.departureDate}
- Name: ${formData.title} ${formData.firstName} ${formData.lastName} 
- Country: ${formData.country}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Adults: ${formData.adults}
- Infants: ${formData.infants}
- Children: ${formData.children}
- Accommodation: ${formData.accomodation}
- Budget: ${formData.budget}
- Interests: 
  - Meal Preference: ${formData.interests.meal.join(", ")}
  - Interest Side: ${formData.interests.interestside.join(", ")}
- Travel Style: ${formData.travelStyle}
- Message: ${formData.message}`;

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");

      // Show success message and reset form
      alert("Tour request submitted successfully!");
      setFormData({
        arriveDate: "",
        departureDate: "",
        title: "",
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        email: "",
        adults: 0,
        infants: 0,
        children: 0,
        budget: "",
        accomodation: "Luxury/High End/Exclusive",
        message: "",
        interests: {
          meal: [],
          interestside: [],
        },
        travelStyle: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(err.message || "Failed to submit tour request");
      alert(err.message || "Failed to submit tour request");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="container mt-50 mb-50">
        {error && (
          <div className="alert alert-danger mb-20" role="alert">
            {error}
          </div>
        )}
        <h6 className="mb-20">Personal Information</h6>
        <div className="row mb-10">
          <div className="col-md-4 col-12 form-group">
            <label>Title:</label>
            <select
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
            </select>
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="row mb-35">
          <div className="col-md-4 col-12 form-group">
            <label>Country:</label>{" "}
            <select
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <h6 className="mb-20">Tour Information</h6>

        <div className="row mb-10">
          <div className="col-md-4 col-12 form-group">
            <label>Arrive Date:</label>
            <input
              type="date"
              className="form-control"
              name="arriveDate"
              value={formData.arriveDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Departure Date:</label>
            <input
              type="date"
              className="form-control"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-4 col-12 form-group">
            <label>Number of Adults:</label>
            <input
              type="number"
              className="form-control"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>
        </div>

        <div className="row mb-10">
          <div className="col-md-4 col-12 form-group">
            <label>Number of Infants:</label>
            <input
              type="number"
              className="form-control"
              name="infants"
              value={formData.infants}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Number of Children:</label>
            <input
              type="number"
              className="form-control"
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              min="0"
              required
            />
          </div>
          <div className="col-md-4 col-12 form-group">
            <label>Budget:</label>
            <select
              className="form-control"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              required
            >
              <option value="USD 300 - 800">USD 300 - 800</option>
              <option value="USD 100 - 2500">USD 100 - 2500</option>
              <option value="Above 5000">Above 5000</option>
            </select>
          </div>
        </div>

        <div className="row mb-30">
          <div className="col-md-4 col-12 form-group">
            <label>Accommodation:</label>
            <select
              className="form-control"
              name="accomodation"
              value={formData.accomodation}
              onChange={handleInputChange}
              required
            >
              <option value="Luxury/High End/Exclusive">
                Luxury/High End/Exclusive
              </option>
              <option value="Five Star">Five Star</option>
              <option value="Four to Five Star">Four to Five Star</option>
              <option value="Four Star or Lower">Four Star or Lower</option>
            </select>
          </div>
        </div>
        <div className="row mb-10">
          <div className="col-md-6 col-12 form-group">
            <h6 className="mb-20">Meal Plan</h6>
            <select
              className="form-control"
              name="mealPlan"
              value={formData.interests.meal[0] || ""}
              onChange={(e) => handleCheckboxChange("meal", e.target.value)}
              required
            >
              <option value="" disabled>
                Select Meal Plan
              </option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>
          <div className="col-md-6 col-12 form-group">
            <h6 className="mb-20">Interests</h6>
            <select
              className="form-control"
              name="interests"
              value={formData.interests.interestside[0] || ""}
              onChange={(e) =>
                handleCheckboxChange("interestside", e.target.value)
              }
              required
            >
              <option value="" disabled>
                Select Interest
              </option>
              <option value="Echo">Echo</option>
              <option value="Beach">Beach</option>
              <option value="Adventure">Adventure</option>
              <option value="Culture">Culture</option>
              <option value="Relax">Relax</option>
              <option value="Wild Life">Wild Life</option>
            </select>
          </div>
        </div>
        <div className="row mb-10">
          <div className="col-md-8 col-12 form-group">
            <h6 className="mb-20">Travel Style</h6>
            <select
              className="form-control"
              name="travelStyle"
              value={formData.travelStyle}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Travel Style
              </option>
              <option value="Luxury">Luxury</option>
              <option value="Backpacking">Backpacking</option>
              <option value="Group Tour">Group Tour</option>
              <option value="Solo">Solo</option>
              <option value="Family">Family</option>
              <option value="Honeymoon">Honeymoon</option>
            </select>
          </div>
        </div>

        <div className="col-md-12 col-12 form-group mb-50">
          <label>Message:</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-book" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Book Now"}
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
      <style jsx>{`
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: none;
        }

        label {
          font-weight: bold;
          color: #000000;
          margin-bottom: 5px;
        }
        input,
        textarea,
        select {
          padding: 10px;
          border-radius: 4px;
          font-size: 16px;
          border-color: #4da528;
          margin-bottom: 15px; /* Adjusted margin for better spacing */
        }
        textarea {
          resize: vertical;
          min-height: 100px;
        }
        .btn-book {
          display: flex;
          justify-content: center;
          background-color: #4da528;
          color: #ffffff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 20px; /* Added margin for better spacing */
        }
        .btn-book:hover {
          background-color: #4da528;
        }
        .form-group {
          margin-bottom: 20px; /* Adjusted margin for better spacing between fields */
        }
        .error-message {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default BookNowForm;
