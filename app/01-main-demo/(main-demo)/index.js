// "use client";

// import React from "react";
// import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";

// import Context from "@/context/Context";
// import { Provider } from "react-redux";
// import Store from "@/redux/store";
// import MobileMenu from "@/components/Header/MobileMenu";
// import Cart from "@/components/Header/Offcanvas/Cart";
// import Separator from "@/components/Common/Separator";
// import FooterThree from "@/components/Footer/Footer-Three";

// import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";

// const HomePageLayout = ({ getBlog }) => {
//   return (
//     <Provider store={Store}>
//       <Context>
//         <MobileMenu />
//         <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
//         <MainDemo blogs={getBlog} />
//         <Cart />

//         <Separator />
//         <FooterThree />
//       </Context>
//     </Provider>
//   );
// };

// export default HomePageLayout;

"use client";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";

const HomePageLayout = ({
  getBlog,
  bannerData,
  featureData,
  aboutUsData,
  countryData,
  requirementsData,
  requirementData,
  customizeData,
  feedbackData,
  contactData,
}) => {
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <MainDemo
          blogs={getBlog}
          bannerData={bannerData}
          featureData={featureData}
          aboutUsData={aboutUsData}
          countryData={countryData}
          requirementsData={requirementsData}
          requirementData={requirementData}
          customizeData={customizeData}
          feedbackData={feedbackData}
          contactData={contactData}
        />
        <Cart />
        <Separator />
        <FooterThree />
      </Context>
    </Provider>
  );
};

export default HomePageLayout;
