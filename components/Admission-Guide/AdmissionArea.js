"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import videoImg from "../../public/images/others/video.png";

const AdmissionArea = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="video-popup-wrapper">
            <Image
              className="w-100 rbt-radius"
              src={videoImg}
              alt="Video Images"
            />
            <Link
              className="rbt-btn btn-white rounded-player popup-video position-to-top"
              href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
              data-vbtype="video"
              controls
            >
              <span>
                <i className="feather-play"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="addmission-guide-content pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <h3 className="title">What We Offer!</h3>
            <p>
              EA Consultancy Ltd is a leading study abroad consultancy in
              Bangladesh, providing expert guidance for students seeking
              undergraduate and postgraduate education overseas. With offices in
              Dhaka, Khulna, Satkhira, Jessore, and Feni, we make professional
              education counseling accessible to students across the country.
            </p>
            <p>
              Our experienced advisors offer end-to-end support, helping
              students choose the right destination, university, and course
              based on their academic background, career goals, and budget. We
              are committed to delivering transparent, reliable, and
              student-focused services.
            </p>
            <h5>Complete Study Abroad Consultancy Services</h5>
            <p>
              As a trusted education consultancy in Dhaka, Khulna, Satkhira,
              Jessore, and Feni, EA Consultancy Ltd assists students with
              university selection, admission applications, SOP and
              documentation preparation, visa guidance, and pre-departure
              support.
            </p>
            <p>
              We work closely with internationally recognized universities and
              institutions, ensuring students receive up-to-date information and
              the highest chance of admission success. Our structured process
              simplifies complex application procedures and saves students
              valuable time.
            </p>
            <div className="apply-btn">
              <a
                className="rbt-btn btn-gradient radius-round icon-hover"
                href="#"
              >
                <span className="btn-text">Apply Now</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionArea;
