"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const MalaysiaOverview = ({ checkMatchCourses }) => {
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
            <h4 className="rbt-title-style-3">🇲🇾 Study in Malaysia – A Guide for Bangladeshi Students

            </h4>
          </div>
          <p>Malaysia is an increasingly popular destination for international students, offering affordable tuition fees, a multicultural environment, and a wide range of English-taught programs. With its strategic location in Southeast Asia, Malaysia provides quality education in fields like engineering, business, IT, and medicine.
          The country's diverse culture and modern infrastructure make it an attractive choice for Bangladeshi students seeking higher education abroad.</p>

      
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

export default MalaysiaOverview;
