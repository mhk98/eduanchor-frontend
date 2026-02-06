"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(
          "https://server.eaconsultancy.info/api/v1/gallery",
        );
        const data = await response.json();
        setGalleryData(data.data || []); // adjust based on your API response
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Initialize Venobox
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".child-gallery-single",
        numeration: true,
        infinigall: true,
        spinner: "rotating-plane",
      });
    });
  }, [galleryData]); // re-run when gallery data changes

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  return (
    <div className="row g-0 parent-gallery-container">
      {galleryData.map((data, index) => (
        <Link
          className="child-gallery-single col-lg-2 col-md-4 col-sm-6 col-6"
          key={index}
          href={`https://server.eaconsultancy.info/${data.image}`}
          data-gall="gallery01"
        >
          <div className="rbt-gallery">
            <Image
              className="w-100"
              src={`https://server.eaconsultancy.info/${data.image}`}
              width={253}
              height={274}
              alt={data.title || "Gallery Image"}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
