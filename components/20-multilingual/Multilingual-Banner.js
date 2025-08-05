"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Static images
import shadow1 from "../../public/images/shape/shadow-1.png";
import shadow2 from "../../public/images/shape/shadow-2.png";
import shadow3 from "../../public/images/shape/shadow-3.png";
import line1 from "../../public/images/shape/curve-line-1.png";
import line2 from "../../public/images/shape/curve-line-2.png";
import line3 from "../../public/images/shape/curve-line-3.png";
import line4 from "../../public/images/shape/curve-line-4.png";
import handCap from "../../public/images/shape/hand-cap.png";
import dotBg from "../../public/images/shape/dot-bg.png";
import dotElement from "../../public/images/shape/dot-element.png";
import translate from "../../public/images/shape/translate.png";
import worldImg from "../../public/images/shape/world.png";

const MultilingualBanner = ({ data }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = ((event.clientX - centerX) / centerX) * 5;
      const moveY = ((event.clientY - centerY) / centerY) * 5;

      setOffsetX(moveX);
      setOffsetY(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const banners = data?.data || [];

  return (
    <div className="rbt-banner-area rbt-banner-20 position-relative">
      <div className="wrapper">
        {/* Background Shadows */}
        <div className="circle-sd-wrapper">
          <div className="circle-shadow-1">
            <Image src={shadow1} width={313} height={278} alt="Shadow" />
          </div>
          <div className="circle-shadow-2">
            <Image src={shadow2} width={571} height={450} alt="Shadow" />
          </div>
          <div className="circle-shadow-3">
            <Image src={shadow3} width={805} height={354} alt="Shadow" />
          </div>
        </div>

        {/* Curved lines and dot elements */}
        <div className="shapes-wrapper">
          <div className="curve-line-1">
            <Image src={line1} width={493} height={820} alt="Line" />
          </div>
          <div className="curve-line-2">
            <Image src={line2} width={806} height={820} alt="Line" />
          </div>
          <div className="curve-line-3">
            <Image src={line3} width={614} height={47} alt="Line" />
          </div>
          <div className="curve-line-4">
            <Image src={line4} width={368} height={325} alt="Line" />
          </div>

          <div className="shape-hand scene">
            <span data-depth="2">
              <Image src={handCap} width={91} height={91} alt="Hand Cap" />
            </span>
          </div>

          <div className="dot-bg">
            <Image src={dotBg} width={1352} height={195} alt="Dots" />
          </div>

          <div className="dot-element scene">
            <span data-depth="2">
              <Image
                src={dotElement}
                width={92}
                height={36}
                alt="Dots"
                style={{
                  transform: `translate(${offsetX * 2}px, ${offsetY * 2}px)`,
                }}
              />
            </span>
          </div>
        </div>

        <div className="container">
          {banners.map((banner, index) => {
            let bannerFiles = [];

            try {
              bannerFiles = JSON.parse(banner.files || "[]");
            } catch (error) {
              console.error("Invalid JSON in banner.files:", error);
            }

            return (
              <div
                className="row col-wrap flex-column-reverse flex-xl-row"
                key={index}
              >
                {/* Left side content */}
                <div className="col-xl-6">
                  <div className="inner position-relative">
                    <div className="shape-1 scene">
                      <span data-depth="3">
                        <Image
                          src={translate}
                          width={66}
                          height={66}
                          alt="Translate"
                        />
                      </span>
                    </div>
                    <h6 className="subtitle theme-gradient">Edu Anchor</h6>
                    <h1 className="title">{banner.title}</h1>
                    <p className="description mt--20 mb--40 mb_sm--30">
                      {banner.text}
                    </p>
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Apply Now</span>
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

                {/* Right side images */}

                <div className="col-xl-6">
                  <div className="language-world">
                    <div className="world">
                      <Image
                        src={worldImg}
                        width={441}
                        height={442}
                        alt="World"
                      />
                    </div>
                    <div className="flages flex flex-wrap gap-3">
                      {bannerFiles.map((file, i) => (
                        <div className="flag" key={i} tabIndex={0}>
                          <Image
                            src={`https://server.eaconsultancy.info/media/${file}`}
                            alt={`flag-${i}`}
                            width={50}
                            height={50}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MultilingualBanner;
