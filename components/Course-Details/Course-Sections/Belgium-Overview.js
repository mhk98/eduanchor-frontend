"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const BelgiumOverview = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  // const { title, desc, descTwo, overviewList } = checkMatchCourses;

  // const addClass = ["/course-detail-8"].some((path) =>
  //   pathname.startsWith(path)
  // );
  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box has-show-more ${toggle ? "active" : ""}`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">

          <div className="d-flex align-items-center gap-3">
          <h5>< FaGraduationCap/></h5>
          <h5>Overview</h5>
          </div>
          <div className="section-title">
            <h4 className="rbt-title-style-3">🇧🇪 Study in Belgium – A Guide for Bangladeshi Students

            </h4>
          </div>
          <p>Belgium, located in the heart of Europe, offers a rich cultural experience and high-quality education. With a multilingual environment and a strong emphasis on research and innovation, Belgian universities attract students worldwide. For Bangladeshi students, Belgium presents an opportunity to study in English, French, or Dutch, depending on the institution and program.</p>

      
        </div>
        {/* <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {
          
            toggle ? "Show Less" : "Show More"
          }
        </div> */}
      </div>
    </>
  );
};

export default BelgiumOverview;
