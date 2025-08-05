"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import ServiceTwelve from "../Services/Service-Twelve";

const HowToApply = ({ data }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <h4 className="title">How to Apply</h4>
              </div>
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
          <ServiceTwelve data={data} head={false} />
        </div>
      </div>
    </>
  );
};

export default HowToApply;
