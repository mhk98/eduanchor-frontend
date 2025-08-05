"use client";

import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const CanadaOverview = ({ checkMatchCourses }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`rbt-course-feature-box overview-wrapper rbt-shadow-box has-show-more ${toggle ? "active" : ""}`}
        id="overview"
      >
        <div className="rbt-course-feature-inner has-show-more-inner-content">
          <div className="d-flex align-items-center gap-3">
            <h5><FaGraduationCap /></h5>
            <h5>Overview</h5>
          </div>

          <div className="section-title">
            <h4 className="rbt-title-style-3">
              🇨🇦 Study in Canada – A Guide for Bangladeshi Students
            </h4>
          </div>

          <p>
            Canada is a top destination for international students, offering world-class education,
            multicultural campuses, and a high standard of living. With over 1,000,000 international
            students in 2023, Canada provides a welcoming environment and diverse academic
            opportunities across its provinces.
          </p>

       
        </div>

        {/* Uncomment this if you want the show more/less functionality */}
        {/* 
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Show Less" : "Show More"}
        </div> 
        */}
      </div>
    </>
  );
};

export default CanadaOverview;
