// "use client";

// import React, { useEffect, useState } from "react";
// import Typed from "typed.js";

// const Banner = () => {
//   const [bannerData, setBannerData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch banner data from API
//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await fetch(
//           "https://server.eaconsultancy.info/api/v1/introduction",
//         );
//         const data = await response.json();
//         // Assuming the API returns an array, take the first banner
//         setBannerData(data?.data);
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBanner();
//   }, []);

//   // Initialize Typed.js
//   useEffect(() => {
//     if (!bannerData) return;

//     const typeInstance = new Typed(".typed-text", {
//       strings: ["Mission.", "Vision.", "Planning."],
//       typeSpeed: 80,
//       backSpeed: 60,
//       startDelay: 200,
//       loop: true,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     return () => typeInstance.destroy();
//   }, [bannerData]);

//   if (loading) return <p className="text-center py-10">Loading banner...</p>;
//   if (!bannerData)
//     return <p className="text-center py-10">No banner data found.</p>;

//   return (
//     <div className="row g-5 align-items-center">
//       <div className="col-lg-10 offset-lg-1">
//         <div className="content text-center">
//           {bannerData?.title && (
//             <div className="rbt-new-badge rbt-new-badge-one mb-3 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black">
//               <span className="rbt-new-badge-icon mr-2">🏆</span>
//               {bannerData?.title}
//             </div>
//           )}

//           {bannerData?.subTitle && (
//             <h1 className="title text-4xl md:text-5xl font-bold mb-4">
//               {bannerData?.subTitle}
//               {/* <span className="typed-text text-gradient"></span> */}
//             </h1>
//           )}

//           {bannerData?.text && (
//             <p className="description text-lg md:text-xl text-gray-600 mb-6">
//               {bannerData?.text}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

"use client";

import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("bannerData", bannerData);

  /* ===============================
     Fetch banner data
  =============================== */
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          "https://server.eaconsultancy.info/api/v1/introduction",
        );
        const result = await response.json();

        // API returns array → take first item
        setBannerData(result?.data || null);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  /* ===============================
     Typed.js init (SAFE)
  =============================== */
  useEffect(() => {
    if (!bannerData) return;

    const el = document.querySelector(".typed-text");
    if (!el) return;

    const typed = new Typed(el, {
      strings: ["Mission.", "Vision.", "Planning."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, [bannerData]);

  /* ===============================
     UI states
  =============================== */
  if (loading) {
    return <p className="text-center py-10">Loading banner...</p>;
  }

  if (!bannerData) {
    return <p className="text-center py-10">No banner data found.</p>;
  }

  /* ===============================
     Render
  =============================== */
  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-10 offset-lg-1">
        <div className="content text-center">
          {/* Badge / Title */}
          {bannerData.title && (
            <div className="rbt-new-badge rbt-new-badge-one mb-3 inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black">
              <span className="rbt-new-badge-icon mr-2">🏆</span>
              {bannerData.title}
            </div>
          )}

          {/* Subtitle + Typed text */}
          {bannerData.subTitle && (
            <h1 className="title text-4xl md:text-5xl font-bold mb-4">
              {bannerData.subTitle}{" "}
              <span className="typed-text text-gradient"></span>
            </h1>
          )}

          {/* Description */}
          {bannerData.text && (
            <p className="description text-lg md:text-xl text-gray-600 mb-6">
              {bannerData.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
