"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "venobox/dist/venobox.min.css";
import TestimonialData from "../../data/elements/testimonial.json";

const StudentFeedback = ({ data }) => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);

  const TestimonialData = data?.data;
  return (
    <>
      <div className="rbt-testimonial-area rbt-sec-cir-shadow-1 bg-color-extra2 rbt-section-gap">
        <div className="gradient-shape-top version-04"></div>
        <div className="gradient-shape-bottom verstion-04"></div>
        {TestimonialData &&
          TestimonialData?.map((data, index) => (
            <div className="container" key={index}>
              <div className="row">
                <div className="col-lg-12 mb--60 mb_sm--50">
                  <div className="section-title text-center">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title w-600">Student's Feedback</h2>
                  </div>
                </div>
              </div>

              <Swiper
                className="testimonial-item-3-activation swiper rbt-arrow-between icon-bg-gray rbt-dot-bottom-center pb--60 pb_sm--50 gutter-swiper-30"
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".rbt-swiper-pagination",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".rbt-arrow-left",
                  prevEl: ".rbt-arrow-right",
                }}
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                  },

                  768: {
                    slidesPerView: 2,
                  },

                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-slide">
                      <div className="rbt-testimonial-box">
                        <div className="inner shadow-11">
                          <div className="clint-info-wrapper">
                            <div className="thumb">
                              <Image
                                src={`https://server.eaconsultancy.info/${data.image}`}
                                width={494}
                                height={494}
                                alt="Clint Images"
                              />
                            </div>
                            <div className="client-info">
                              <h5 className="title">{data.name}</h5>
                              <span>
                                {data.position} <i>{data.designation}</i>
                              </span>
                            </div>
                          </div>
                          <div className="description">
                            <p className="subtitle-3">{data.text}</p>
                            <div className="rating mt--20">
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                              <Link href="#">
                                <i className="fa fa-star"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <div className="rbt-swiper-arrow rbt-arrow-left">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-left"></i>
                    <i className="rbt-icon-top feather-arrow-left"></i>
                  </div>
                </div>

                <div className="rbt-swiper-arrow rbt-arrow-right">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-right"></i>
                    <i className="rbt-icon-top feather-arrow-right"></i>
                  </div>
                </div>

                <div className="rbt-swiper-pagination"></div>
              </Swiper>
            </div>
          ))}
      </div>
    </>
  );
};

export default StudentFeedback;
