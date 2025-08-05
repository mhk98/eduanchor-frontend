"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const NetherlandOverview = ({ checkMatchCourses }) => {
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
            <h4 className="rbt-title-style-3">🇳🇱 Study in the Netherlands – A Guide for Bangladeshi Students
            </h4>
          </div>
          <p>The Netherlands is renowned for its high-quality education system, innovative teaching methods, and a wide array of English-taught programs.
            With a strong emphasis on internationalization, Dutch universities attract students from around the globe.
            For Bangladeshi students, the Netherlands offers an opportunity to gain globally recognized degrees in a multicultural and inclusive environment.
          </p>

      
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

export default NetherlandOverview;
