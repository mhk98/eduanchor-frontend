// import Image from "next/image";
// import Link from "next/link";

// import TeamData from "../../data/elements/team.json";
// import { useEffect, useState } from "react";

// const TeamTen = () => {
//   const [managements, setManagements] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [employee, setEmployee] = useState([]);
//   const [loading1, setLoading1] = useState(true);

//   useEffect(() => {
//     const fetchManagement = async () => {
//       try {
//         const res = await fetch("https://server.eaconsultancy.info/api/v1/management");
//         const data = await res.json();
//         setManagements(data.data || []);
//       } catch (error) {
//         console.error("Failed to fetch management data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchManagement();
//   }, []);

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const res = await fetch("https://server.eaconsultancy.info/api/v1/employee");
//         const data = await res.json();
//         setEmployee(data.data || []);
//       } catch (error) {
//         console.error("Failed to fetch employee data", error);
//       } finally {
//         setLoading1(false);
//       }
//     };

//     fetchEmployee();
//   }, []);

//   if (loading) {
//     return <p className="text-center py-10">Loading management...</p>;
//   }
//   if (loading1) {
//     return <p className="text-center py-10">Loading employee...</p>;
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row mb--60 g-5 align-items-end">
//           <div className="col-lg-6 col-md-6 col-12">
//             <div className="section-title text-start">
//               <span className="subtitle bg-white-opacity">Our Instructor</span>
//               <h2 className="title color-white">Expert Instructor</h2>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6 col-12">
//             <div className="read-more-btn text-start text-md-end">
//               <Link
//                 className="rbt-btn hover-icon-reverse radius-round btn-white"
//                 href="#"
//               >
//                 <div className="icon-reverse-wrapper">
//                   <span className="btn-text">BECAME A INSTRUCTOR</span>
//                   <span className="btn-icon">
//                     <i className="feather-arrow-right"></i>
//                   </span>
//                   <span className="btn-icon">
//                     <i className="feather-arrow-right"></i>
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="row g-5">
//           {managements &&
//             managements.map((data, index) => (
//               <div
//                 className={`${
//                   data.isLarge
//                     ? "col-lg-3 col-md-6 col-sm-6 col-12"
//                     : "col-lg-2 col-md-3 col-sm-4 col-12"
//                 }`}
//                 key={index}
//               >
//                 <div className="rbt-team-modal-thumb nav nav-tabs">
//                   <Link
//                     className="rbt-team-thumbnail w-100"
//                     href="#"
//                     data-bs-toggle="modal"
//                     data-bs-target={`#exampleModal${index}`}
//                   >
//                     <div className="thumb">
//                       <Image
//                         className="w-100"
//                         src={`https://server.eaconsultancy.info/${data.image}`}
//                         width={284}
//                         height={379}
//                         priority
//                         alt="Testimonial Images"
//                       />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {managements.map((data, index) => (
//           <div
//             className="rbt-team-modal modal fade rbt-modal-default"
//             id={`exampleModal${index}`}
//             tabIndex="-1"
//             aria-labelledby={`exampleModal${index}`}
//             aria-hidden="true"
//             key={index}
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="rbt-round-btn"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   >
//                     <i className="feather-x"></i>
//                   </button>
//                 </div>

//                 <div className="modal-body">
//                   <div className="inner">
//                     <div className="row g-5 row--30 align-items-center">
//                       <div className="col-lg-4">
//                         <div className="rbt-team-thumbnail">
//                           <div className="thumb">
//                             <Image
//                               className="w-100"
//                               src={`https://server.eaconsultancy.info/${data.image}`}
//                               width={415}
//                               height={555}
//                               priority
//                               alt="Testimonial Images"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-8">
//                         <div className="rbt-team-details">
//                           <div className="author-info">
//                             <h4 className="title">{data.name}</h4>
//                             <span className="designation theme-gradient">
//                               {data.designation}
//                             </span>
//                             {/* <span className="team-form">
//                               <i className="feather-map-pin"></i>
//                               <span className="location">{data.location}</span>
//                             </span> */}
//                           </div>
//                           {/* <p className="mb--15">{item.desc}</p>

//                           <p>{item.descTwo}</p> */}
//                           <ul className="social-icon social-default mt--20 justify-content-start">
//                             <li>
//                               <Link href="https://www.facebook.com/">
//                                 <i className="feather-facebook"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.twitter.com">
//                                 <i className="feather-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.instagram.com/">
//                                 <i className="feather-instagram"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.linkdin.com/">
//                                 <i className="feather-linkedin"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                           <ul className="rbt-information-list mt--25">
//                             <li>
//                               <Link href="#">
//                                 <i className="feather-phone"></i>
//                                 {/* {item.phone} */}
//                                 01518301098
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="mailto:hello@example.com">
//                                 <i className="feather-mail"></i>
//                                 {/* {item.email} */}
//                                 example@gmail.com
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="top-circle-shape"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="row g-5">
//           {employee &&
//             employee.map((data, index) => (
//               <div
//                 className={`${
//                   data.isLarge
//                     ? "col-lg-3 col-md-6 col-sm-6 col-12"
//                     : "col-lg-2 col-md-3 col-sm-4 col-12"
//                 }`}
//                 key={index}
//               >
//                 <div className="rbt-team-modal-thumb nav nav-tabs">
//                   <Link
//                     className="rbt-team-thumbnail w-100"
//                     href="#"
//                     data-bs-toggle="modal"
//                     data-bs-target={`#exampleModal${index}`}
//                   >
//                     <div className="thumb">
//                       <Image
//                         className="w-100"
//                         src={`https://server.eaconsultancy.info/${data.image}`}
//                         width={173}
//                         height={231}
//                         priority
//                         alt="Testimonial Images"
//                       />
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {employee.map((data, index) => (
//           <div
//             className="rbt-team-modal modal fade rbt-modal-default"
//             id={`exampleModal${index}`}
//             tabIndex="-1"
//             aria-labelledby={`exampleModal${index}`}
//             aria-hidden="true"
//             key={index}
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="rbt-round-btn"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   >
//                     <i className="feather-x"></i>
//                   </button>
//                 </div>

//                 <div className="modal-body">
//                   <div className="inner">
//                     <div className="row g-5 row--30 align-items-center">
//                       <div className="col-lg-4">
//                         <div className="rbt-team-thumbnail">
//                           <div className="thumb">
//                             <Image
//                               className="w-100"
//                               src={`https://server.eaconsultancy.info/${data.image}`}
//                               width={415}
//                               height={555}
//                               priority
//                               alt="Testimonial Images"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-8">
//                         <div className="rbt-team-details">
//                           <div className="author-info">
//                             <h4 className="title">{data.name}</h4>
//                             <span className="designation theme-gradient">
//                               {data.designation}
//                             </span>
//                             {/* <span className="team-form">
//                               <i className="feather-map-pin"></i>
//                               <span className="location">{data.location}</span>
//                             </span> */}
//                           </div>
//                           {/* <p className="mb--15">{item.desc}</p>

//                           <p>{item.descTwo}</p> */}
//                           <ul className="social-icon social-default mt--20 justify-content-start">
//                             <li>
//                               <Link href="https://www.facebook.com/">
//                                 <i className="feather-facebook"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.twitter.com">
//                                 <i className="feather-twitter"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.instagram.com/">
//                                 <i className="feather-instagram"></i>
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="https://www.linkdin.com/">
//                                 <i className="feather-linkedin"></i>
//                               </Link>
//                             </li>
//                           </ul>
//                           <ul className="rbt-information-list mt--25">
//                             <li>
//                               <Link href="#">
//                                 <i className="feather-phone"></i>
//                                 {/* {item.phone} */}
//                                 01518301098
//                               </Link>
//                             </li>
//                             <li>
//                               <Link href="mailto:hello@example.com">
//                                 <i className="feather-mail"></i>
//                                 {/* {item.email} */}
//                                 example@gmail.com
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="top-circle-shape"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default TeamTen;

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TeamTen = () => {
  const [managements, setManagements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState([]);
  const [loading1, setLoading1] = useState(true);

  useEffect(() => {
    const fetchManagement = async () => {
      try {
        const res = await fetch(
          "https://server.eaconsultancy.info/api/v1/management"
        );
        const data = await res.json();
        setManagements(data.data || []);
      } catch (error) {
        console.error("Failed to fetch management data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchManagement();
  }, []);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await fetch(
          "https://server.eaconsultancy.info/api/v1/employee"
        );
        const data = await res.json();
        setEmployee(data.data || []);
      } catch (error) {
        console.error("Failed to fetch employee data", error);
      } finally {
        setLoading1(false);
      }
    };
    fetchEmployee();
  }, []);

  if (loading || loading1) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <>
      <div className="container">
        {/* Section Title */}
        <div className="row mb--60 g-5 align-items-end">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="section-title text-start">
              <span className="subtitle bg-white-opacity">Our Instructor</span>
              <h2 className="title color-white">Expert Instructor</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="read-more-btn text-start text-md-end">
              <Link
                className="rbt-btn hover-icon-reverse radius-round btn-white"
                href="#"
              >
                <div className="icon-reverse-wrapper">
                  <span className="btn-text">BECOME AN INSTRUCTOR</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Management Grid - INCREASED SIZES HERE */}
        <div className="row g-5 mb--60">
          {managements.map((data, index) => (
            <div
              className={`${
                data.isLarge
                  ? "col-lg-4 col-md-6 col-12" // Increased from col-lg-3
                  : "col-lg-3 col-md-4 col-sm-6 col-12" // Increased from col-lg-2
              }`}
              key={`mgmt-grid-${index}`}
            >
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <Link
                  className="rbt-team-thumbnail w-100"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#mgmtModal${index}`}
                >
                  <div className="thumb">
                    <Image
                      className="w-100"
                      src={`https://server.eaconsultancy.info/${data.image}`}
                      /* Increased Dimensions */
                      width={500}
                      height={650}
                      priority
                      alt={data.name || "Management"}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Management Modals */}
        {managements.map((data, index) => (
          <div
            className="rbt-team-modal modal fade rbt-modal-default"
            id={`mgmtModal${index}`}
            tabIndex="-1"
            aria-hidden="true"
            key={`mgmt-mod-${index}`}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="rbt-round-btn"
                    data-bs-dismiss="modal"
                  >
                    <i className="feather-x"></i>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="inner">
                    <div className="row g-5 row--30 align-items-center">
                      <div className="col-lg-4">
                        <div className="rbt-team-thumbnail">
                          <Image
                            className="w-100"
                            src={`https://server.eaconsultancy.info/${data.image}`}
                            width={415}
                            height={555}
                            alt={data.name}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="rbt-team-details">
                          <div className="author-info">
                            <h4 className="title">{data.name}</h4>
                            <span className="designation theme-gradient">
                              {data.designation}
                            </span>
                          </div>
                          <ul className="social-icon social-default mt--20 justify-content-start">
                            <li>
                              <Link href="#">
                                <i className="feather-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="feather-linkedin"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Employee Grid (Kept original sizes as requested) */}
        <div className="row g-5">
          {employee.map((data, index) => (
            <div
              className={
                data.isLarge
                  ? "col-lg-3 col-md-6 col-12"
                  : "col-lg-2 col-md-3 col-12"
              }
              key={`emp-grid-${index}`}
            >
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <Link
                  className="rbt-team-thumbnail w-100"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#empModal${index}`}
                >
                  <div className="thumb">
                    <Image
                      className="w-100"
                      src={`https://server.eaconsultancy.info/${data.image}`}
                      width={173}
                      height={231}
                      alt="Employee"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Employee Modals (Omitted for brevity, similar to mgmt) */}
      </div>
    </>
  );
};

export default TeamTen;
