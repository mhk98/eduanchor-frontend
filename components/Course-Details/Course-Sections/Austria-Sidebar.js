"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "venobox/dist/venobox.min.css";

import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";
import { addToCartAction } from "@/redux/action/CartAction";

const AustriaSidebar = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const { cartToggle, setCart } = useAppContext();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const disableVideo = [
    "/course-detail-2",
    "/course-detail-3",
    "/course-detail-4",
    "/course-detail-5",
    "/course-detail-6",
    "/course-detail-7",
    "/course-detail-8",
  ].some((path) => pathname.startsWith(path));

  const isVideo = ["/course-detail-6"].some((path) =>
    pathname.startsWith(path)
  );

  // =====> Start ADD-To-Cart
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);

  const [amount, setAmount] = useState(1);

  const addToCartFun = (id, amount, product) => {
    dispatch(addToCartAction(id, amount, product));
    setCart(!cartToggle);
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
    localStorage.setItem("hiStudy", JSON.stringify(cart));
  }, [cart]);

  // =====> For video PopUp
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // const labelStyle = { minWidth: '220px', fontWeight: '500' };

  return (
    <>
      {/* {!disableVideo ? (
        <Link
          className={`video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15 ${
            hideOnScroll ? "d-none" : ""
          }`}
          data-vbtype="video"
          href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
        >
          <div className="video-content">
            {checkMatchCourses.courseImg && (
              <Image
                className="w-100 rbt-radius"
                src={checkMatchCourses.courseImg}
                width={355}
                height={255}
                alt="Video Images"
              />
            )}
            <div className="position-to-top">
              <span className="rbt-btn rounded-player-2 with-animation">
                <span className="play-icon"></span>
              </span>
            </div>
            <span className="play-view-text d-block color-white">
              <i className="feather-eye"></i> Preview this course
            </span>
          </div>
        </Link>
      ) : (
        ""
      )}
      {isVideo ? (
        <div
          className={`radius-6 overflow-hidden sidebar-video-hidden mb--30 ${
            hideOnScroll ? "d-none" : ""
          }`}
        >
          <div className="plyr__video-embed rbtplayer">
            <iframe
              className="radius-6 overflow-hidden"
              src="https://www.youtube.com/embed/DR9lxZ8kPYQ?autoplay=0&controls=0&disablekb=1&playsinline=0&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=http%3A%2F%2Flocalhost%3A3001%2Fcourse-details-3.html&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3001&widgetid=1"
              allowFullScreen
              width={355}
              height={200}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )} */}
      
      <div className="content-item-content">

<div className="d-flex flex-column gap-4">

<div className="d-flex gap-4">
  <div><small className="text-dark" style={{fontWeight:500}}>Intakes & Deadlines</small></div>
  <div>
    <div><small>- Fall (August/September): Major intake. Deadline:</small> <small className="text-decoration-underline">Dec – March</small></div>
    <div><small>- Spring (January): Fewer courses. Deadline: Aug – Oct</small></div>
    <div><small>- Summer (May): Limited courses. Deadline: Jan – Mar</small></div>
  </div>
</div>

<div className="d-flex  mt-4">
  <div  ><small className="text-dark" style={{fontWeight:500}}>Tuition Fees (per year)</small></div>
  <div>
    <div><small>- Undergraduate: $20,000 – $45,000</small></div>
    <div><small>- Postgraduate (Master’s): $25,000 – $50,000</small></div>
  </div>
</div>

<div className="d-flex mt-4">
  <div  ><small className="text-dark" style={{fontWeight:500}}>Living Costs (annual estimate)</small></div>
  <div>
<small>
- $10,000 – $18,000 depending on location and lifestyle (includes housing, food, transport, insurance, etc.)

</small>
  </div>
</div>

<div className="d-flex mt-4">
  <div  ><small className="text-dark" style={{fontWeight:500}}>Language Requirements</small></div>
  <div>
    <div><small>- TOEFL iBT: 80–100</small></div>
    <div><small>- IELTS: 6.5–7.5</small></div>
    <div><small>- Duolingo English Test: 105–120 (accepted by many institutions)</small></div>
  </div>
</div>

<div className="d-flex mt-4">
  <div  ><small className="text-dark" style={{fontWeight:500}}>Work Rights</small></div>
  <div>
    <div><small>- On-campus: Up to 20 hours/week during semesters, 40 hours/week during breaks</small></div>
    <div><small>- Off-campus: CPT (during study), OPT (after graduation)</small></div>
  </div>
</div>

<div className="d-flex mt-4">
  <div  ><small className="text-dark" style={{fontWeight:500}}>Application Fees</small></div>
  <div><small>- $50 – $100 per university (varies by institution)</small></div>
</div>

</div>
      </div>
    </>
  );
};

export default AustriaSidebar;
