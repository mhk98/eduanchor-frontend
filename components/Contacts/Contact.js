// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { useState, useRef, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// const Contact = ({ data }) => {
//   const [file, setFile] = useState(null);
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const recaptchaRef = useRef(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const onSubmit = async (formData) => {
//     if (!captchaToken) {
//       alert("Please verify you are a human!");
//       return;
//     }

//     const payload = new FormData();
//     payload.append("firstName", formData.firstName);
//     payload.append("lastName", formData.lastName);
//     payload.append("email", formData.email);
//     payload.append("phone", formData.phone);
//     payload.append("message", formData.message);
//     payload.append("captchaToken", captchaToken);
//     if (file) payload.append("file", file);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch(
//         "https://api.eaconsultancy.info/api/v1/contact/create",
//         {
//           method: "POST",
//           body: payload,
//         }
//       );

//       if (response.ok) {
//         alert("Message submitted successfully!");
//         reset();
//         setFile(null);
//         setCaptchaToken(null);
//         recaptchaRef.current.reset();
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     import("venobox/dist/venobox.min.js").then((venobox) => {
//       new venobox.default({
//         selector: ".popup-video",
//       });
//     });
//   }, []);

//   const branches = data?.data;

//   console.log("branches", branches);

//   return (
//     <>
//       <h4 className="text-center fw-bold pb--60">
//         EA CONSULTANCY LTD IS NOW IN
//       </h4>
//       <Swiper
//         className="testimonial-item-3-activation swiper rbt-arrow-between icon-bg-gray rbt-dot-bottom-center pb--60 pb_sm--50 gutter-swiper-30 gap-5"
//         slidesPerView={1}
//         spaceBetween={20}
//         modules={[Navigation, Pagination]}
//         pagination={{
//           el: ".rbt-swiper-pagination",
//           clickable: true,
//         }}
//         navigation={{
//           nextEl: ".rbt-arrow-left",
//           prevEl: ".rbt-arrow-right",
//         }}
//         breakpoints={{
//           575: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//         }}
//       >
//         {branches.map((item, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="card border-0 shadow-sm h-100 branch-card">

//               {item.image ?  <img
//                 src={`https://server.eaconsultancy.info/${item.image}`}
//                 alt={item.image}
//                 className="card-img-top"
//                 style={{
//                   height: "200px",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "0.5rem",
//                   borderTopRightRadius: "0.5rem",
//                 }}
//               /> : "No image available"}
//               <div className="card-body text-center">
//                 <h5 className="fw-bold">{item.branch || "Branch Name Not Available"}</h5>
//                 <p className="mb-1 text-muted">
//                   <i className="fas fa-phone-alt text-danger"></i> {item.phone}
//                 </p>
//                 <p className="small text-secondary">{item.location}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="rbt-swiper-arrow rbt-arrow-left">
//           <div className="custom-overfolow">
//             <i className="rbt-icon feather-arrow-left"></i>
//             <i className="rbt-icon-top feather-arrow-left"></i>
//           </div>
//         </div>

//         <div className="rbt-swiper-arrow rbt-arrow-right">
//           <div className="custom-overfolow">
//             <i className="rbt-icon feather-arrow-right"></i>
//             <i className="rbt-icon-top feather-arrow-right"></i>
//           </div>
//         </div>

//         <div className="rbt-swiper-pagination"></div>
//       </Swiper>

//       <div className="row justify-content-center my-5">
//         <div className="col-lg-8">
//           <div className="bg-light p-4 p-md-5 shadow rounded-4">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               encType="multipart/form-data"
//             >
//               <div className="row g-3">
//                 {/* First Name */}
//                 <div className="col-md-6">
//                   <label htmlFor="firstName" className="form-label title">
//                     First Name *
//                   </label>
//                   <input
//                     id="firstName"
//                     type="text"
//                     className="form-control"
//                     {...register("firstName", {
//                       required: "First name is required",
//                     })}
//                   />
//                   {errors.firstName && (
//                     <small className="text-danger">
//                       {errors.firstName.message}
//                     </small>
//                   )}
//                 </div>

//                 {/* Last Name */}
//                 <div className="col-md-6">
//                   <label htmlFor="lastName" className="form-label title">
//                     Last Name *
//                   </label>
//                   <input
//                     id="lastName"
//                     type="text"
//                     className="form-control"
//                     {...register("lastName", {
//                       required: "Last name is required",
//                     })}
//                   />
//                   {errors.lastName && (
//                     <small className="text-danger">
//                       {errors.lastName.message}
//                     </small>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div className="col-md-6">
//                   <label htmlFor="email" className="form-label title">
//                     Email *
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     className="form-control"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\S+@\S+$/i,
//                         message: "Invalid email format",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <small className="text-danger">
//                       {errors.email.message}
//                     </small>
//                   )}
//                 </div>

//                 {/* Phone */}
//                 <div className="col-md-6">
//                   <label htmlFor="phone" className="form-label title">
//                     Phone Number *
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     className="form-control"
//                     {...register("phone", {
//                       required: "Phone number is required",
//                     })}
//                   />
//                   {errors.phone && (
//                     <small className="text-danger">
//                       {errors.phone.message}
//                     </small>
//                   )}
//                 </div>

//                 {/* Message */}
//                 <div className="col-12">
//                   <label htmlFor="message" className="form-label title">
//                     Your Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     className="form-control fs-4"
//                     rows="4"
//                     {...register("message", {
//                       required: "Message is required",
//                     })}
//                   ></textarea>
//                   {errors.message && (
//                     <small className="text-danger">
//                       {errors.message.message}
//                     </small>
//                   )}
//                 </div>

//                 {/* File Upload */}
//                 <div className="col-12">
//                   <label htmlFor="file" className="form-label title">
//                     Add Documents:
//                   </label>
//                   <input
//                     id="file"
//                     type="file"
//                     accept="image/*,application/pdf"
//                     onChange={handleFileChange}
//                     className="form-control fs-5"
//                   />
//                 </div>
//               </div>

//               {/* reCAPTCHA + Submit */}
//               <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
//                 <div className="mb-3 mb-md-0">
//                   <ReCAPTCHA
//                     sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                     onChange={(token) => setCaptchaToken(token)}
//                     onExpired={() => setCaptchaToken(null)}
//                     ref={recaptchaRef}
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-dark px-4 py-2 fw-bold fs-5 mt-3 mt-md-0"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { useState, useRef, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// const Contact = ({ data }) => {
//   const [file, setFile] = useState(null);
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const recaptchaRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const onSubmit = async (formData) => {
//     if (!captchaToken) {
//       alert("Please verify you are a human!");
//       return;
//     }

//     const payload = new FormData();
//     payload.append("firstName", formData.firstName);
//     payload.append("lastName", formData.lastName);
//     payload.append("email", formData.email);
//     payload.append("phone", formData.phone);
//     payload.append("message", formData.message);
//     payload.append("captchaToken", captchaToken);
//     if (file) payload.append("file", file);

//     try {
//       setIsSubmitting(true);
//       const response = await fetch(
//         "https://api.eaconsultancy.info/api/v1/contact/create",
//         {
//           method: "POST",
//           body: payload,
//         }
//       );

//       if (response.ok) {
//         alert("Message submitted successfully!");
//         reset();
//         setFile(null);
//         setCaptchaToken(null);
//         recaptchaRef.current.reset();
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     import("venobox/dist/venobox.min.js").then((venobox) => {
//       new venobox.default({
//         selector: ".popup-video",
//       });
//     });
//   }, []);

//   const branches = data?.data;

//   console.log("branches", branches);

//   return (
//     <>
//       <h4 className="text-center fw-bold pb--60">
//         EA CONSULTANCY LTD IS NOW IN
//       </h4>
//       <Swiper
//         className="testimonial-item-3-activation swiper rbt-arrow-between icon-bg-gray rbt-dot-bottom-center pb--60 pb_sm--50 gutter-swiper-30 gap-5"
//         slidesPerView={1}
//         spaceBetween={20}
//         modules={[Navigation, Pagination, Autoplay]} // ✅ Include Autoplay
//         autoplay={{
//           delay: 3000, // ✅ Slide every 3 seconds
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true, // ✅ Pause on hover
//         }}
//         pagination={{
//           el: ".rbt-swiper-pagination",
//           clickable: true,
//         }}
//         navigation={{
//           nextEl: ".rbt-arrow-left",
//           prevEl: ".rbt-arrow-right",
//         }}
//         breakpoints={{
//           575: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//         }}
//       >
//         {/* {branches.map((item, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="card border-0 shadow-sm h-100 branch-card">

//               {item.image ?  <img
//                 src={`https://server.eaconsultancy.info/${item.image}`}
//                 alt={item.image}
//                 className="card-img-top"
//                 style={{
//                   height: "200px",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "0.5rem",
//                   borderTopRightRadius: "0.5rem",
//                 }}
//               /> : "No image available"}
//               <div className="card-body text-center">
//                 <h5 className="fw-bold">{item.branch || "Branch Name Not Available"}</h5>
//                 <p className="mb-1 text-muted">
//                   <i className="fas fa-phone-alt text-danger"></i> {item.phone}
//                 </p>
//                 <p className="small text-secondary">{item.location}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))} */}

//         {Array.isArray(branches) && branches.length > 0 ? (
//           branches.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <div className="card border-0 shadow-sm h-100 branch-card">
//                 {item?.image ? (
//                   <img
//                     src={`https://server.eaconsultancy.info/${item.image}`}
//                     alt={item.branch || "Branch"}
//                     className="card-img-top"
//                     style={{
//                       height: "200px",
//                       objectFit: "cover",
//                       borderTopLeftRadius: "0.5rem",
//                       borderTopRightRadius: "0.5rem",
//                     }}
//                   />
//                 ) : (
//                   <div
//                     style={{
//                       height: "200px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       background: "#f8f9fa",
//                       borderTopLeftRadius: "0.5rem",
//                       borderTopRightRadius: "0.5rem",
//                     }}
//                   >
//                     No image available
//                   </div>
//                 )}
//                 <div className="card-body text-center">
//                   <h5 className="fw-bold">
//                     {item?.branch || "Branch Name Not Available"}
//                   </h5>
//                   <p className="mb-1 text-muted">
//                     <i className="fas fa-phone-alt text-danger"></i>{" "}
//                     {item?.phone || "No phone number"}
//                   </p>
//                   <p className="small text-secondary">
//                     {item?.location || "No location available"}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))
//         ) : (
//           <p className="text-center">No branches available.</p>
//         )}

//         <div className="rbt-swiper-arrow rbt-arrow-left">
//           <div className="custom-overfolow">
//             <i className="rbt-icon feather-arrow-left"></i>
//             <i className="rbt-icon-top feather-arrow-left"></i>
//           </div>
//         </div>

//         <div className="rbt-swiper-arrow rbt-arrow-right">
//           <div className="custom-overfolow">
//             <i className="rbt-icon feather-arrow-right"></i>
//             <i className="rbt-icon-top feather-arrow-right"></i>
//           </div>
//         </div>

//         <div className="rbt-swiper-pagination"></div>
//       </Swiper>

//       <button
//         type="button"
//         class="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//         className="rbt-btn btn-gradient flex-column justify-content-center align-items-center"
//       >
//         Contact Us
//       </button>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">
//                 Modal title
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <div className="row justify-content-center my-5">
//                 <div className="col-lg-8">
//                   <div className="bg-light p-4 p-md-5 shadow rounded-4">
//                     <form
//                       onSubmit={handleSubmit(onSubmit)}
//                       encType="multipart/form-data"
//                     >
//                       <div className="row g-3">
//                         {/* First Name */}
//                         <div className="col-md-6">
//                           <label
//                             htmlFor="firstName"
//                             className="form-label title"
//                           >
//                             First Name *
//                           </label>
//                           <input
//                             id="firstName"
//                             type="text"
//                             className="form-control"
//                             {...register("firstName", {
//                               required: "First name is required",
//                             })}
//                           />
//                           {errors.firstName && (
//                             <small className="text-danger">
//                               {errors.firstName.message}
//                             </small>
//                           )}
//                         </div>

//                         {/* Last Name */}
//                         <div className="col-md-6">
//                           <label
//                             htmlFor="lastName"
//                             className="form-label title"
//                           >
//                             Last Name *
//                           </label>
//                           <input
//                             id="lastName"
//                             type="text"
//                             className="form-control"
//                             {...register("lastName", {
//                               required: "Last name is required",
//                             })}
//                           />
//                           {errors.lastName && (
//                             <small className="text-danger">
//                               {errors.lastName.message}
//                             </small>
//                           )}
//                         </div>

//                         {/* Email */}
//                         <div className="col-md-6">
//                           <label htmlFor="email" className="form-label title">
//                             Email *
//                           </label>
//                           <input
//                             id="email"
//                             type="email"
//                             className="form-control"
//                             {...register("email", {
//                               required: "Email is required",
//                               pattern: {
//                                 value: /^\S+@\S+$/i,
//                                 message: "Invalid email format",
//                               },
//                             })}
//                           />
//                           {errors.email && (
//                             <small className="text-danger">
//                               {errors.email.message}
//                             </small>
//                           )}
//                         </div>

//                         {/* Phone */}
//                         <div className="col-md-6">
//                           <label htmlFor="phone" className="form-label title">
//                             Phone Number *
//                           </label>
//                           <input
//                             id="phone"
//                             type="tel"
//                             className="form-control"
//                             {...register("phone", {
//                               required: "Phone number is required",
//                             })}
//                           />
//                           {errors.phone && (
//                             <small className="text-danger">
//                               {errors.phone.message}
//                             </small>
//                           )}
//                         </div>

//                         {/* Message */}
//                         <div className="col-12">
//                           <label htmlFor="message" className="form-label title">
//                             Your Message *
//                           </label>
//                           <textarea
//                             id="message"
//                             className="form-control fs-4"
//                             rows="4"
//                             {...register("message", {
//                               required: "Message is required",
//                             })}
//                           ></textarea>
//                           {errors.message && (
//                             <small className="text-danger">
//                               {errors.message.message}
//                             </small>
//                           )}
//                         </div>

//                         {/* File Upload */}
//                         <div className="col-12">
//                           <label htmlFor="file" className="form-label title">
//                             Add Documents:
//                           </label>
//                           <input
//                             id="file"
//                             type="file"
//                             accept="image/*,application/pdf"
//                             onChange={handleFileChange}
//                             className="form-control fs-5"
//                           />
//                         </div>
//                       </div>

//                       {/* reCAPTCHA + Submit */}
//                       <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
//                         <div className="mb-3 mb-md-0">
//                           <ReCAPTCHA
//                             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                             onChange={(token) => setCaptchaToken(token)}
//                             onExpired={() => setCaptchaToken(null)}
//                             ref={recaptchaRef}
//                           />
//                         </div>

//                         <button
//                           type="submit"
//                           className="btn btn-dark px-4 py-2 fw-bold fs-5 mt-3 mt-md-0"
//                           disabled={isSubmitting}
//                         >
//                           {isSubmitting ? "Submitting..." : "Submit"}
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
    Object.entries(formData).forEach(([key, value]) =>
      payload.append(key, value),
    );
    if (file) payload.append("file", file);
    payload.append("captchaToken", captchaToken);

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://api.eaconsultancy.info/api/v1/contact/create",
        {
          method: "POST",
          body: payload,
        },
      );

      if (response.ok) {
        alert("Message submitted successfully!");
        reset();
        setFile(null);
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
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

  const branches = data?.data;

  return (
    <>
      <h4 className="text-center fw-bold pb--60">
        EA CONSULTANCY LTD IS NOW IN
      </h4>

      {/* Swiper Carousel */}
      <Swiper
        className="testimonial-item-3-activation swiper pb--60 pb_sm--50"
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ el: ".rbt-swiper-pagination", clickable: true }}
        navigation={{ nextEl: ".rbt-arrow-left", prevEl: ".rbt-arrow-right" }}
        breakpoints={{
          575: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {Array.isArray(branches) && branches.length > 0 ? (
          branches.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card border-0 shadow-sm h-100">
                {item.image ? (
                  <img
                    src={`https://server.eaconsultancy.info/${item.image}`}
                    alt={item.branch || "Branch"}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light text-muted"
                    style={{
                      height: "200px",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  >
                    No image available
                  </div>
                )}
                <div className="card-body text-center">
                  <h5 className="fw-bold">{item.branch || "Branch Name"}</h5>
                  <p className="mb-1 text-muted">
                    <i className="fas fa-phone-alt text-danger"></i>{" "}
                    {item.phone || "N/A"}
                  </p>
                  <p className="small text-secondary">
                    {item.location || "Location not available"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center">No branches available.</p>
        )}
      </Swiper>

      {/* Contact Button */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="rbt-btn btn-gradient"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Contact Us
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-3 p-md-4">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="contactModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="row g-3">
                  {/* First Name */}
                  <div className="col-md-6">
                    <label
                      htmlFor="firstName"
                      className="form-label fw-semibold"
                    >
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
                    <label
                      htmlFor="lastName"
                      className="form-label fw-semibold"
                    >
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
                    <label htmlFor="email" className="form-label fw-semibold">
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
                    <label htmlFor="phone" className="form-label fw-semibold">
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
                    <label htmlFor="message" className="form-label fw-semibold">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
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
                    <label htmlFor="file" className="form-label fw-semibold">
                      Add Documents (Optional)
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="form-control"
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
                    className="btn btn-dark px-4 py-2 fw-bold mt-3 mt-md-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
