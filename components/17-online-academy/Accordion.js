import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CourseDetails from "../../data/course-details/courseData.json";

const Accordion = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

  const [courseFilter, setCourseFilter] = useState(getAllCourse);
  const [activeTab, setActiveTab] = useState("All Course");

  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  const handleButtonClick = (courseType) => {
    setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    filterItem(courseType);
  };
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-course-area rbt-sec-cir-shadow-1 bg-color-extra2 rbt-section-gap">
          <div className="gradient-shape-top"></div>
          <div className="gradient-shape-bottom"></div>
          <div className="container">
            <div className="row mb--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title w-600">
                    Histudy Course Student <br /> Can{" "}
                    <span className="theme-gradient">Join With Us</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mb--40 mb_sm--30">
              <div className="col-lg-12">
                <div className="rbt-course-tab-button-wrap">
                  <ul
                    className="rbt-course-tab-button nav nav-tabs"
                    id="rbt-myTab"
                    role="tablist"
                  >
                    {[
                      "All Course",
                      "featured",
                      "popular",
                      "trending",
                      "latest",
                    ].map((courseType, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={activeTab === courseType ? "active" : ""}
                          type="button"
                          onClick={() => handleButtonClick(courseType)}
                        >
                          <span className="filter-text text-capitalize">
                            {courseType}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb--40">
              <div className="col-lg-12">
                <div className="tab-content" id="rbt-myTabContent">
                  <div className="row g-5">
                    {courseFilter.slice(0, 6).map((data, index) => (
                      <div className={`col-lg-4 col-md-6 col-12`} key={index}>
                        <div className="rbt-card variation-04 rbt-hover">
                          <div className="rbt-card-img">
                            <Link href={`/course-details/${data.id}`}>
                              <Image
                                src={data.courseImg}
                                width={355}
                                height={244}
                                alt="Card image"
                              />
                              {data.offPrice > 0 ? (
                                <div className="rbt-badge-3 bg-white">
                                  <span>-{data.offPrice}%</span>
                                  <span>Off</span>
                                </div>
                              ) : (
                                ""
                              )}
                            </Link>
                          </div>
                          <div className="rbt-card-body">
                            <ul className="rbt-meta">
                              <li>
                                <i className="feather-book"></i>
                                {data.lesson} Lessons
                              </li>
                              <li>
                                <i className="feather-users"></i>
                                {data.student} Students
                              </li>
                            </ul>
                            <h4 className="rbt-card-title">
                              <Link href={`/course-details/${data.id}`}>
                                {data.courseTitle}
                              </Link>
                            </h4>
                            <p className="rbt-card-text">{data.desc}</p>

                            <div className="rbt-review">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <span className="rating-count">
                                ({data.review} Reviews)
                              </span>
                            </div>

                            <div className="rbt-card-bottom">
                              <div className="rbt-price">
                                <span className="current-price mb-0">
                                  ${data.price}
                                </span>
                                <span className="off-price version-02">
                                  ${data.offPrice}
                                </span>
                              </div>

                              <Link
                                className="rbt-btn-link color-primary"
                                href={`/course-details/${data.id}`}
                              >
                                Enroll Course
                                <i className="feather-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt--55">
              <div className="col-lg-12">
                <div className="load-more-btn text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg hover-icon-reverse"
                    href="/course-withtab-two"
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Accordion;
