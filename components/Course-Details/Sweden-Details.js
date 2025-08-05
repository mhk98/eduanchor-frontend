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
import SwedenMenu from "./Course-Sections/Sweden-Menu";
import SwedenSidebar from "./Course-Sections/Sweden-Sidebar";
import SwedenOverview from "./Course-Sections/Sweden-Overview";
import SwedenContent from "./Course-Sections/Sweden-Content";
import SwedenRequirements from "./Course-Sections/Sweden-Requirements";
import SwedenVisa from "./Course-Sections/Sweden-Visa";
import SwedenPR from "./Course-Sections/Sweden-PR";

const SwedenDetails = ({ checkMatchCourses }) => {
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
                <SwedenSidebar
                  checkMatchCourses={checkMatchCourses && checkMatchCourses}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="course-details-content">
            <div className="rbt-inner-onepage-navigation sticky-top mt--30">
              <SwedenMenu />
            </div>

            {checkMatchCourses &&
              checkMatchCourses.courseOverview.map((data, index) => (
                <SwedenOverview {...data} key={index} checkMatchCourses={data} />
              ))}

            <div
              className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
              id="coursecontent"
            >
              {checkMatchCourses &&
                checkMatchCourses.courseContent.map((data, index) => (
                  <SwedenContent {...data} key={index} checkMatchCourses={data} />
                ))}
            </div>

            <div
              className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
              id="details"
            >
              <div className="row g-5">
                  <SwedenRequirements/>
              </div>
            </div>
            <div
              className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
              id="intructor"
            >
                <SwedenVisa/>
            </div>
            <div
              className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
              id="review"
            >
              <SwedenPR />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwedenDetails;
