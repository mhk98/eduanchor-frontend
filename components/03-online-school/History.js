"use client";

import React, { useEffect } from "react";
import sal from "sal.js";
import ServiceNine from "../Services/Service-Nine";
import Link from "next/link";

const History = ({ data }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="service-wrapper bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start"></div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link className="rbt-moderbt-btn" href="#">
                  <span className="moderbt-btn-text">
                    View All Requirements
                  </span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row mb--60">
            {/* <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">
                  Histudy Feature
                </span>
                <h2 className="title">
                  Check out Histudy&apos;s features <br /> to win any exam
                </h2>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ServiceNine data={data} head={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
