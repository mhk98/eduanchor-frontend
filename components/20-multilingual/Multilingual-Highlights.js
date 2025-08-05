import React, { useEffect, useState } from "react";
import Image from "next/image";

// const FeatureData = [
//   {
//     id: 1,
//     img: "/images/icons/f-icon-01.png",
//     title: "Best Industry",
//     subTitle: "Leaders",
//     description:
//       "It is a long established fact that a reader will be distracted by this on readable.",
//   },
//   {
//     id: 2,
//     img: "/images/icons/f-icon-02.png",
//     title: "Learn Courses",
//     subTitle: "Online",
//     description:
//       "It is a long established fact that a reader will be distracted by this on readable.",
//   },
//   {
//     id: 3,
//     img: "/images/icons/f-icon-03.png",
//     title: "Online Book",
//     subTitle: "Library",
//     description:
//       "It is a long established fact that a reader will be distracted by this on readable.",
//   },
// ];

const MultilingualHighlights = ({ data }) => {
  const FeatureData = data?.data;

  return (
    <>
      <div className="rbt-feature-area rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            {FeatureData.map((data, i) => (
              <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={i}>
                <div className="rbt-feature-card">
                  <div className="d-sm-flex align-items-center gap-4">
                    <span
                      className={`icon ${
                        data.id === 1 ? "bg-color-pink" : "bg-color-primary"
                      } ${data.id === 3 ? "bg-color-secondary" : ""}`}
                    >
                      <Image
                        src={`https://server.eaconsultancy.info/${data.image}`}
                        alt={`flag-${i}`}
                        width={50}
                        height={50}
                      />
                    </span>
                    <h6 className="card-title mt-4 mt-sm-0">{data.title}</h6>
                  </div>
                  <p className="description">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MultilingualHighlights;
