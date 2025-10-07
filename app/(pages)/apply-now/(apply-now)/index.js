"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { fbqTrack } from "@/lib/fbq";

const ApplyNowPage = () => {
  // Track page load ApplyNowClick
  useEffect(() => {
    const eventId = uuidv4();
    fbqTrack("ApplyNowClick", {
      event_name: "Consultation Lead",
      event_id: eventId,
    });
    fetch("https://api.eaconsultancy.info/api/v1/pixel/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId, event_name: "Consultation Lead" }),
    }).catch((err) => console.error("Pixel tracking failed", err));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Helper function to track pixel + backend call
  const trackPixel = (eventName) => {
    const eventId = uuidv4();
    fbqTrack(eventName, { event_name: eventName, event_id: eventId });
    fetch("https://api.eaconsultancy.info/api/v1/pixel/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId, event_name: eventName }),
    }).catch((err) => console.error("Pixel tracking failed", err));
  };

  const onSubmit = async (data) => {
    const cleanedData = {
      ...data,
      status: "WebsiteLeads",
      bachelorYear:
        data.bachelorYear === "" ? null : parseInt(data.bachelorYear),
      bachelorDepartment:
        data.bachelorDepartment === "" ? null : data.bachelorDepartment,
      bachelorCGPA: data.bachelorCGPA === "" ? null : data.bachelorCGPA,
    };

    try {
      window.scrollTo(0, 0);

      const response = await fetch(
        "https://api.eaconsultancy.info/api/v1/consultation/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cleanedData),
        }
      );

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      console.log("Success:", result);

      if (result.success) {
        // Track form submitted event
        trackPixel("Consultation Form Submitted");
        alert("Thank you! One of our expert counselors will contact you soon.");
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container my-5 px-3 px-md-5">
      <div
        className="bg-white p-4 p-md-5 shadow rounded-4 mx-auto mt-5 mt-md-0"
        style={{ maxWidth: "850px" }}
      >
        <h3 className="text-center fw-bold mb-3 fs-1">
          Book your free consultation
        </h3>
        <p className="text-center text-muted mb-4 fs-5">
          A dedicated member of the EA Consultancy team will contact you within
          24 hours.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-semibold fs-4">
              Full Name *
            </label>
            <input
              id="fullName"
              className="form-control fs-4"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <small className="text-danger">Full name is required</small>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold fs-4">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              className="form-control"
              placeholder="+8801XXXXXXXXX"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <small className="text-danger">Phone number is required</small>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold fs-4">
              Email *
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="text-danger">Email is required</small>
            )}
          </div>

          {/* Destination */}
          <div className="mb-3">
            <label
              htmlFor="destination"
              className="form-label fw-semibold fs-4"
            >
              Preferred Destination *
            </label>
            <select
              id="destination"
              className="form-select fs-4"
              {...register("destination", { required: true })}
            >
              <option value="">Select your destination</option>
              <option>Australia</option>
              <option>Austria</option>
              <option>Belgium</option>
              <option>Canada</option>
              <option>China</option>
              <option>Cyprus</option>
              <option>Denmark</option>
              <option>Dubai</option>
              <option>Finland</option>
              <option>Germany</option>
              <option>Hungary</option>
              <option>Malaysia</option>
              <option>Sweden</option>
              <option>UK</option>
              <option>USA</option>
              <option>Other</option>
            </select>
            {errors.destination && (
              <small className="text-danger">
                Preferred destination is required
              </small>
            )}
          </div>

          {/* Location */}
          <div className="mb-3">
            <label htmlFor="location" className="form-label fw-semibold fs-4">
              Appointment Location *
            </label>
            <select
              id="location"
              className="form-select fs-4"
              {...register("location", { required: true })}
            >
              <option value="">Select Location</option>
              <option value="Khulna">Khulna</option>
              <option value="Satkhira">Satkhira</option>
              <option value="Jashore">Jashore</option>
              <option value="Dhaka">Dhaka</option>
            </select>
            {errors.location && (
              <small className="text-danger">
                Appointment Location is required
              </small>
            )}
          </div>

          {/* Checkboxes */}
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("agree1")}
              id="agree1"
            />
            <label className="form-check-label" htmlFor="agree1">
              I agree to receive communications and useful resources from EA
              Consultancy.
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("agree2")}
              id="agree2"
            />
            <label className="form-check-label" htmlFor="agree2">
              I consent to receiving messages from participating institutions.
            </label>
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-dark py-2 fs-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPage;
