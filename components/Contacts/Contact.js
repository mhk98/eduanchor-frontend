import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FiHeadphones } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const Contact = ({ data }) => {
  const [file, setFile] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const onSubmit = async (formData) => {
    if (!captchaToken) {
      alert("Please verify you are a human!");
      return;
    }

    const payload = new FormData();
    payload.append("firstName", formData.firstName);
    payload.append("lastName", formData.lastName);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("message", formData.message);
    payload.append("captchaToken", captchaToken); // Optional: send to backend
    if (file) payload.append("file", file);

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://api.eaconsultancy.info/api/v1/contact/create",
        {
          method: "POST",
          body: payload,
        }
      );

      if (response.ok) {
        alert("Message submitted successfully!");
        reset();
        setFile(null);
        setCaptchaToken(null);
        recaptchaRef.current.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactData = data?.data;

  return (
    <>
      {ContactData?.map((info, index) => (
        <div className="row g-5" key={index}>
          <div className="rbt-address col-md-4 ">
            <div className="icon">
              <FiHeadphones />
            </div>
            <div className="inner">
              <h4 className="title">Contact Phone Number</h4>
              <p>{info.phone}</p>
            </div>
          </div>
          <div className="rbt-address col-md-4">
            <div className="icon">
              <MdOutlineEmail />
            </div>
            <div className="inner">
              <h4 className="title">Our Email Address</h4>
              <p>{info.email}</p>
            </div>
          </div>
          <div className="rbt-address col-md-4">
            <div className="icon">
              <IoLocationOutline />
            </div>
            <div className="inner">
              <h4 className="title">Our Location</h4>
              <p>{info.location}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="row justify-content-center my-5">
        <div className="col-lg-8">
          <div className="bg-light p-4 p-md-5 shadow rounded-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="row g-3">
                {/* First Name */}
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label title">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="form-control"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <small className="text-danger">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label title">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="form-control"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <small className="text-danger">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label title">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label title">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-control"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />
                  {errors.phone && (
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  )}
                </div>

                {/* Message */}
                <div className="col-12">
                  <label htmlFor="message" className="form-label title">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    className="form-control fs-4"
                    rows="4"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <small className="text-danger">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                {/* File Upload */}
                <div className="col-12">
                  <label htmlFor="file" className="form-label title">
                    Add Documents:
                  </label>
                  <input
                    id="file"
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={handleFileChange}
                    className="form-control fs-5"
                  />
                </div>
              </div>

              {/* reCAPTCHA + Submit */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                <div className="mb-3 mb-md-0">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                    ref={recaptchaRef}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark px-4 py-2 fw-bold fs-5 mt-3 mt-md-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
