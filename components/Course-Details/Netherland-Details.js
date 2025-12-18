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
import NetherlandMenu from "./Course-Sections/Netherland-Menu";
import NetherlandSidebar from "./Course-Sections/Netherland-Sidebar";
import NetherlandOverview from "./Course-Sections/Netherland-Overview";
import NetherlandContent from "./Course-Sections/Netherland-Content";
import NetherlandRequirements from "./Course-Sections/Netherland-Requirements";
import NetherlandVisa from "./Course-Sections/Netherland-Visa";
import NetherlandPR from "./Course-Sections/Netherland-PR";

const NetherlandDetails = ({ checkMatchCourses }) => {
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
                <NetherlandSidebar
                  checkMatchCourses={checkMatchCourses && checkMatchCourses}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="course-details-content">
            <div className="rbt-inner-onepage-navigation sticky-top mt--30">
              <NetherlandMenu />
            </div>

            <div id="overview">
              <NetherlandOverview />
            </div>

            <div
              className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
              id="coursecontent"
            >
              {checkMatchCourses &&
                checkMatchCourses.courseContent.map((data, index) => (
                  <NetherlandContent
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
                <NetherlandRequirements />
              </div>
            </div>
            <div
              className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
              id="intructor"
            >
              <NetherlandVisa />
            </div>
            <div
              className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
              id="review"
            >
              <NetherlandPR />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetherlandDetails;
