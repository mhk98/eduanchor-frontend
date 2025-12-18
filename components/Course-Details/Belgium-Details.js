"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import "venobox/dist/venobox.min.css";
import CourseMenu from "./Course-Sections/Course-Menu";
import Instructor from "./Course-Sections/Instructor";
import CanadaSidebar from "./Course-Sections/Canada-Sidebar";
import CanadaOverview from "./Course-Sections/Canada-Overview";
import CanadaContent from "./Course-Sections/Canada-Content";
import CanadaRequirements from "./Course-Sections/Canada-Requirements";
import CanadaPR from "./Course-Sections/Canada-PR";
import BelgiumMenu from "./Course-Sections/Belgium-Menu";
import BelgiumOverview from "./Course-Sections/Belgium-Overview";
import BelgiumContent from "./Course-Sections/Belgium-Content";
import BelgiumRequirements from "./Course-Sections/Belgium-Requirements";
import BelgiumVisa from "./Course-Sections/Belgium-Visa";
import BelgiumPR from "./Course-Sections/Belgium-PR";
import BelgiumSidebar from "./Course-Sections/Belgium-Sidebar";

const BelgiumDetails = ({ checkMatchCourses }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div className="row row--30 gy-5 pt--60">
        <div className="col-lg-5">
          <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
            <div className="inner">
              <div className="content-item-content">
                <BelgiumSidebar
                  checkMatchCourses={checkMatchCourses && checkMatchCourses}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="course-details-content">
            <div className="rbt-inner-onepage-navigation sticky-top mt--30">
              <BelgiumMenu />
            </div>

            <div id="belgiumOverview">
              <BelgiumOverview />
            </div>
            <div
              className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
              id="coursecontent"
            >
              {checkMatchCourses &&
                checkMatchCourses.courseContent.map((data, index) => (
                  <BelgiumContent
                    {...data}
                    key={index}
                    checkMatchCourses={data}
                  />
                ))}
            </div>

            <div
              className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
              id="details"
            >
              <div className="row g-5">
                <BelgiumRequirements />
              </div>
            </div>
            <div
              className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
              id="intructor"
            >
              <BelgiumVisa />
            </div>
            <div
              className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
              id="review"
            >
              <BelgiumPR />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BelgiumDetails;
