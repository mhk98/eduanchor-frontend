// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Typed from "typed.js";

// import "venobox/dist/venobox.min.css";

// const Video = () => {
//   useEffect(() => {
//     import("venobox/dist/venobox.min.js").then((venobox) => {
//       new venobox.default({
//         selector: ".popup-video",
//       });
//     });
//   }, []);

//   const [items, setItems] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch banner data from API
//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await fetch(
//           "https://server.eaconsultancy.info/api/v1/workstation"
//         );
//         const data = await response.json();
//         // Assuming the API returns an array, take the first banner
//         setItems(data.data?.[0] || null);
//       } catch (error) {
//         console.error("Error fetching banner:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBanner();
//   }, []);

//   // useEffect(() => {
//   //   if (!items) return;

//   //   const typeInstance = new Typed(".typed-text", {
//   //     strings: ["Mission.", "Vision.", "Planning."],
//   //     typeSpeed: 80,
//   //     backSpeed: 60,
//   //     startDelay: 200,
//   //     loop: true,
//   //     showCursor: true,
//   //     cursorChar: "|",
//   //   });

//   //   return () => typeInstance.destroy();
//   // }, [items]);

//   if (loading) return <p className="text-center py-10">Loading items...</p>;
//   if (!items) return <p className="text-center py-10">No items data found.</p>;

//   return (
//     <>
//       <div className="rbt-video-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               {items?.image && (
//                 <div className="video-popup-wrapper">
//                   <Image
//                     className="w-100 rbt-radius"
//                     src={`https://server.eaconsultancy.info/${items?.image}`}
//                     width={1170}
//                     height={500}
//                     alt="Video Images"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Video;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import "venobox/dist/venobox.min.css";

const Video = () => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch banner
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          "https://server.eaconsultancy.info/api/v1/workstation"
        );
        const json = await res.json();
        setItems(json.data?.[0] || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);

  // Venobox init (client only + DOM safe)
  useEffect(() => {
    if (!items) return;
    if (typeof window === "undefined") return;

    import("venobox/dist/venobox.min.js").then((module) => {
      const Venobox = module.default;

      if (document.querySelector(".popup-video")) {
        new Venobox({
          selector: ".popup-video",
        });
      }
    });
  }, [items]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!items) return null;

  return (
    <div className="rbt-video-area">
      <div className="container">
        <div className="video-popup-wrapper">
          <a
            className="popup-video"
            href={
              items?.videoUrl || "https://www.youtube.com/watch?v=nA1Aqp0sPQo"
            }
            data-vbtype="video"
          >
            <Image
              src={`https://server.eaconsultancy.info/${items.image}`}
              alt="Video"
              width={1170}
              height={500}
              className="rbt-radius"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
