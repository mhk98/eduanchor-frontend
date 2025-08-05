"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const AustraliaOverview = ({ checkMatchCourses }) => {
  // const pathname = usePathname();
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
            <h4 className="rbt-title-style-3">🇦🇺 Study in Australia – A Guide for Bangladeshi Students
            </h4>
          </div>
          <p>Australia is a premier destination for international students, offering world-class education,
            diverse cultural experiences, and a high standard of living.
            With a strong emphasis on research and innovation, Australian institutions provide a wide range
            of programs across various disciplines. The country's commitment to quality education and student
             support makes it an attractive choice for Bangladeshi students seeking global opportunities.</p>

      
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

export default AustraliaOverview;
