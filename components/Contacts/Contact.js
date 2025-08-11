import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
    payload.append("captchaToken", captchaToken);
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

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  const branches = [
    {
      name: "DHAKA",
      phone: "+8801618274549",
      address: "Flat-G2 House 5/1Block-E, Lalmatia. Dhaka-1207",
      img: "https://i.ibb.co.com/MBdw62v/pexels-mark-mccammon-1080696.jpg",
    },
    {
      name: "KHULNA",
      phone: "+8801618274549",
      address: "House EX3, Road 28, Nirala Abashik, Khulna",
      img: "https://i.ibb.co.com/MBdw62v/pexels-mark-mccammon-1080696.jpg",
    },
    {
      name: "SATKHIRA",
      phone: "+8801751-073544",
      address:
        "Robiul Plaza, Holding - 8925, Govt. College More-1st Gate, 9400 Satkhira",
      img: "https://i.ibb.co.com/MBdw62v/pexels-mark-mccammon-1080696.jpg",
    },
    {
      name: "JASHORE",
      phone: "+8801818-812058",
      address:
        "Holding No. 0103-01, Abdul Aziz Road, Puratan Kashimpur, Kazipara, Jashore Sadar (7400), Jashore.",
      img: "https://i.ibb.co.com/MBdw62v/pexels-mark-mccammon-1080696.jpg",
    },
  ];

  return (
    <>
      <Swiper
        className="testimonial-item-3-activation swiper rbt-arrow-between icon-bg-gray rbt-dot-bottom-center pb--60 pb_sm--50 gutter-swiper-30"
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".rbt-swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".rbt-arrow-left",
          prevEl: ".rbt-arrow-right",
        }}
        breakpoints={{
          575: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {branches.map((branch, idx) => (
          <SwiperSlide key={idx}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={branch.img}
                width={400}
                height={250}
                alt={`${branch.name} branch`}
                className="img-fluid"
              />
              <div className="card-body text-center bg-white text-dark">
                <h4 className="fw-bold">{branch.name}</h4>
                <p className="mb-1">
                  <i className="fas fa-phone-alt text-danger"></i>{" "}
                  {branch.phone}
                </p>
                <p className="small">{branch.address}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="rbt-swiper-arrow rbt-arrow-left">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-left"></i>
            <i className="rbt-icon-top feather-arrow-left"></i>
          </div>
        </div>

        <div className="rbt-swiper-arrow rbt-arrow-right">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-right"></i>
            <i className="rbt-icon-top feather-arrow-right"></i>
          </div>
        </div>

        <div className="rbt-swiper-pagination"></div>
      </Swiper>

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
