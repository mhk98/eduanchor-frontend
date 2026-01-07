"use client";

import Store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Cart from "@/components/Header/Offcanvas/Cart";
import Context from "@/context/Context";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import AdmissionArea from "@/components/Admission-Guide/AdmissionArea";
import AdmissionContact from "@/components/Admission-Guide/AdmissionContact";
import FooterThree from "@/components/Footer/Footer-Three";

const AdmissionGuidePage = () => {
  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MobileMenu />
          <Cart />
          <BreadCrumb title="Our Services" text="Our Services" />

          <div className="rbt-admission-area bg-color-white rbt-section-gapTop">
            <div className="container">
              <AdmissionArea />
            </div>
          </div>

          <div className="rbt-conatct-area bg-color-white pt--60 rbt-section-gapBottom">
            <div className="container">
              <AdmissionContact />
            </div>
          </div>

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default AdmissionGuidePage;
