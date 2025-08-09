"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { fbqTrack } from "@/lib/fbq";

const ApplyNowPage = () => {
  useEffect(() => {
    const eventId = uuidv4();

    // Client-side
    fbqTrack("Consultation", {
      event_name: "Consultation Lead",
      event_category: "Submission Form",
      event_id: eventId,
    });

    // Server-side
    fetch("https://api.eaconsultancy.info/api/v1/pixel/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId,
        event_name: "Consultation Lead",
        event_category: "Submission Form",
      }),
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let status = "websiteLeads";

    const cleanedData = {
      ...data,
      status,
      bachelorYear:
        data.bachelorYear === "" ? null : parseInt(data.bachelorYear),
      bachelorDepartment:
        data.bachelorDepartment === "" ? null : data.bachelorDepartment,
      bachelorCGPA: data.bachelorCGPA === "" ? null : data.bachelorCGPA,
    };
    try {
      window.scrollTo(0, 0);
      const response = await axios.post(
        "https://api.eaconsultancy.info/api/v1/consultation/create",
        cleanedData
      );
      console.log("Success:", response.data);
      if (response.status === 200) {
        alert("Form submitted successfully!");
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
          A dedicated member of the LCI Group team will contact you within 24
          hours to arrange your initial consultation with one of our education
          experts.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-4">
            <div className="col-md-6">
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

            <div className="col-md-6">
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

            <div className="col-md-6">
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

            <div className="col-md-6">
              <label htmlFor="date" className="form-label fw-semibold fs-4">
                Date of Birth
              </label>
              <input
                type="date"
                id="date"
                className="form-control"
                {...register("date")}
              />
            </div>

            <div className="col-md-6">
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
                <option>Bangladeshi</option>
                <option>Indian</option>
                <option>Other</option>
              </select>
              {errors.destination && (
                <small className="text-danger">
                  Preferred destination is required
                </small>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="address" className="form-label fw-semibold fs-4">
                Full Address *
              </label>
              <input
                id="address"
                className="form-control fs-4"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <small className="text-danger">Full Address is required</small>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="ielts" className="form-label fw-semibold fs-4">
                IELTS *
              </label>
              <select
                id="ielts"
                className="form-select fs-4"
                {...register("ielts", { required: true })}
              >
                <option value="">Select type</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              {errors.ielts && (
                <small className="text-danger">
                  IELTS selection is required
                </small>
              )}
            </div>

            <div className="col-md-6">
              <label
                htmlFor="ieltsScore"
                className="form-label fw-semibold fs-4"
              >
                IELTS Score*
              </label>
              <input
                id="ieltsScore"
                className="form-control fs-4"
                {...register("ieltsScore", { required: true })}
              />
              {errors.ieltsScore && (
                <small className="text-danger">
                  IELTS Score selection is required
                </small>
              )}
            </div>

            <div className="col-md-6">
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
                <option value="Tangail">Tangail</option>
                <option value="Jashore">Jashore</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Dinajpur">Dinajpur</option>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Savar">Savar</option>
                <option value="Feni">Feni</option>
              </select>
              {errors.location && (
                <small className="text-danger">
                  Appointment Location is required
                </small>
              )}
            </div>

            <div className="col-md-6">
              <label
                htmlFor="applicationCode"
                className="form-label fw-semibold fs-4"
              >
                Application Code *
              </label>
              <input
                id="applicationCode"
                className="form-control fs-4"
                {...register("applicationCode", { required: true })}
              />
              {errors.applicationCode && (
                <small className="text-danger">
                  Application Code is required
                </small>
              )}
            </div>

            {/* Academic Info */}
            <div className="col-md-6">
              <label htmlFor="sscYear" className="form-label fw-semibold fs-4">
                SSC Year *
              </label>
              <input
                id="sscYear"
                type="number"
                className="form-control"
                {...register("sscYear", { required: true })}
              />
              {errors.sscYear && (
                <small className="text-danger">SSC Year is required</small>
              )}
            </div>
            <div className="col-md-6">
              <label
                htmlFor="sscDepartment"
                className="form-label fw-semibold fs-4"
              >
                SSC Department *
              </label>
              <input
                id="sscDepartment"
                className="form-control"
                {...register("sscDepartment", { required: true })}
              />
              {errors.sscDepartment && (
                <small className="text-danger">
                  SSC Department is required
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="sscCGPA" className="form-label fw-semibold fs-4">
                SSC GPA/CGPA *
              </label>
              <input
                id="sscCGPA"
                className="form-control"
                {...register("sscCGPA", { required: true })}
              />
              {errors.sscCGPA && (
                <small className="text-danger">SSC GPA is required</small>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="hscYear" className="form-label fw-semibold fs-4">
                HSC Year *
              </label>
              <input
                id="hscYear"
                type="number"
                className="form-control"
                {...register("hscYear", { required: true })}
              />
              {errors.hscYear && (
                <small className="text-danger">HSC Year is required</small>
              )}
            </div>
            <div className="col-md-6">
              <label
                htmlFor="hscDepartment"
                className="form-label fw-semibold fs-4"
              >
                HSC Department *
              </label>
              <input
                id="hscDepartment"
                className="form-control"
                {...register("hscDepartment", { required: true })}
              />
              {errors.hscDepartment && (
                <small className="text-danger">
                  HSC Department is required
                </small>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="hscCGPA" className="form-label fw-semibold fs-4">
                HSC GPA/CGPA *
              </label>
              <input
                id="hscCGPA"
                className="form-control"
                {...register("hscCGPA", { required: true })}
              />
              {errors.hscCGPA && (
                <small className="text-danger">HSC GPA is required</small>
              )}
            </div>

            {/* Bachelor Info */}
            <div className="col-md-6">
              <label
                htmlFor="bachelorYear"
                className="form-label fw-semibold fs-4"
              >
                Bachelor Year
              </label>
              <input
                id="bachelorYear"
                type="number"
                className="form-control"
                {...register("bachelorYear")}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="bachelorDepartment"
                className="form-label fw-semibold fs-4"
              >
                Bachelor Department
              </label>
              <input
                id="bachelorDepartment"
                className="form-control"
                {...register("bachelorDepartment")}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="bachelorCGPA"
                className="form-label fw-semibold fs-4"
              >
                Bachelor GPA/CGPA
              </label>
              <input
                id="bachelorCGPA"
                className="form-control"
                {...register("bachelorCGPA")}
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mt-4">
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                {...register("agree1")}
                id="agree1"
              />
              <label className="form-check-label" htmlFor="agree1">
                I agree to receive communications and useful resources from LCI
                Group.
              </label>
            </div>

            <div className="form-check">
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
