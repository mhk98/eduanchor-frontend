import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Typed from "typed.js";

import "venobox/dist/venobox.min.css";

const Video = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch banner data from API
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          "https://server.eaconsultancy.info/api/v1/workstation"
        );
        const data = await response.json();
        // Assuming the API returns an array, take the first banner
        setItems(data.data?.[0] || null);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanner();
  }, []);

  // Initialize Typed.js
  useEffect(() => {
    if (!items) return;

    const typeInstance = new Typed(".typed-text", {
      strings: ["Mission.", "Vision.", "Planning."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typeInstance.destroy();
  }, [items]);

  if (loading) return <p className="text-center py-10">Loading items...</p>;
  if (!items) return <p className="text-center py-10">No items data found.</p>;

  return (
    <>
      <div className="rbt-video-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {items.image && (
                <div className="video-popup-wrapper">
                  <Image
                    className="w-100 rbt-radius"
                    src={`https://server.eaconsultancy.info/${items.image}`}
                    width={1170}
                    height={500}
                    alt="Video Images"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
