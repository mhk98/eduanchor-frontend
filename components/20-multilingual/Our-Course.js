import React, { useEffect, useState } from "react";
import Image from "next/image";
import sal from "sal.js";
import Link from "next/link";

const OurCourse = ({ data }) => {
  // const getAllCourse = JSON.parse(JSON.stringify(CourseTabData.courseTab));

  const getAllCourse = data?.data;

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-course-area rbt-section-gapBottom mt-5">
        <div className="container">
          <div className="row mb--30">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 className="b2 mb--15">
                  <span className="theme-gradient">
                    Choose Your Destination
                  </span>
                </h6>
                <h2 className="title w-600">
                  {/* Limitlesss Learning, More <br />{" "} */}
                  <span className="">Coutries We Work With</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="rbt-course-tab-button-wrap">
                <ul
                  className="rbt-course-tab-button nav nav-tabs justify-content-center flex-wrap gap-3"
                  id="rbt-myTab"
                  role="tablist"
                >
                  {getAllCourse?.map((data, i) => (
                    <a href={data?.url}>
                      <li
                        className="nav-item d-flex align-items-center gap-2"
                        role="presentation"
                        key={i}
                      >
                        <span className="icon d-flex align-items-center">
                          <Image
                            src={`https://server.eaconsultancy.info/${data.image}`}
                            width={20}
                            height={20}
                            alt="Flag Icon"
                          />
                        </span>
                        <span className="btn-text">{data.title}</span>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCourse;
