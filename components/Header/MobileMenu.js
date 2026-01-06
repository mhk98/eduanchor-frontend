"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/EAC LOGO/Eac logo new v1.png";
import Nav from "./Nav";
import { useAppContext } from "@/context/Context";

const MobileMenu = () => {
  const { mobile, setMobile } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="backdrop" onClick={() => setMobile(!mobile)}></div>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">We Open The World For You</p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:hello@example.com">
                  <i className="feather-mail"></i>support@eaconsultancy.info
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="feather-phone"></i>+880 16 1827 4549
                </Link>
              </li>
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="/apply-now"
              >
                <span>Apply Now</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.facebook.com/eaconsultancy.info">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/eaconsultancy/posts/?feedView=all">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
