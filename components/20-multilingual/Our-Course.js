import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseTabData from "../../data/elements/advanceTab.json";
import ukSvg from "../../public/images/shape/united-kingdom.svg";
import germanySvg from "../../public/images/shape/germany.svg";
import skSvg from "../../public/images/shape/south-korea.svg";
import franceSvg from "../../public/images/shape/france.svg";
import japanSvg from "../../public/images/shape/japan.svg";
import italySvg from "../../public/images/shape/italian.svg";
import Link from "next/link";
import sal from "sal.js";

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
                  <span className="theme-gradient">Our Course</span>
                </h6>
                <h2 className="title w-600">
                  Limitlesss Learning, More <br />{" "}
                  <span className="theme-gradient">Possibilities</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="rbt-course-tab-button-wrap">
                <ul
                  className="rbt-course-tab-button nav nav-tabs"
                  id="rbt-myTab"
                  role="tablist"
                >
                  {getAllCourse.map((data, i) => (
                    <li className="nav-item" role="presentation" key={i}>
                      <span className="icon">
                        <Image
                          src={`http://localhost:5000/media/${data.image}`}
                          width={20}
                          height={20}
                          alt="Flag Icon"
                        />
                      </span>
                      <span className="btn-text">{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-12">
              <div className="tab-content" id="rbt-myTabContent">
                {getAllCourse.map((data, i) => (
                  <div
                    className={`tab-pane fade ${
                      data.isActive ? "active show" : ""
                    }`}
                    id={data.category}
                    role="tabpanel"
                    aria-labelledby={`${data.category}-tab`}
                    key={i}
                  >
                    <div className="row g-5">
                      {data.body.map((innerData, index) => (
                        <div
                          className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                          // data-sal-delay="150"
                          // data-sal="slide-up"
                          // data-sal-duration="800"
                          key={index}
                        >
                          <div className="rbt-card variation-03 rbt-hover">
                            <div className="rbt-card-img">
                              <Link
                                className="thumbnail-link"
                                href={`/course-withtab-two`}
                              >
                                <Image
                                  src={innerData.img}
                                  width={355}
                                  height={244}
                                  alt="Card image"
                                />
                                <span className="rbt-btn btn-white icon-hover btn-md">
                                  <span className="btn-text">Read More</span>
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                  </span>
                                </span>
                              </Link>
                            </div>
                            <div className="rbt-card-body">
                              <h5 className="rbt-card-title">
                                <Link href={`/course-withtab-two`}>
                                  English Courses
                                </Link>
                              </h5>
                              <div className="rbt-card-bottom">
                                <Link
                                  className="transparent-button"
                                  href={`/course-withtab-two`}
                                >
                                  <i>
                                    <svg
                                      width="17"
                                      height="12"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g
                                        stroke="#27374D"
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                        <path
                                          strokeLinecap="square"
                                          d="M.663 5.572h14.594"
                                        ></path>
                                      </g>
                                    </svg>
                                  </i>
                                </Link>
                              </div>
                            </div>
                            <div className="card-information">
                              <div className="card-flag">
                                <Image
                                  src={innerData.flagImg}
                                  width={20}
                                  height={20}
                                  alt="united-kingdom"
                                />
                              </div>
                              <div className="card-count">
                                {innerData.totalCourse} programs
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt--55">
            <div className="col-lg-12">
              <div className="load-more-btn text-center">
                <Link
                  className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                  href="/course-card-3"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View All Courses</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurCourse;
