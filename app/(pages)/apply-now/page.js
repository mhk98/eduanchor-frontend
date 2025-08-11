// import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
// import ApplyNowPage from "./(apply-now)";
// import FooterThree from "@/components/Footer/Footer-Three";
// import MobileMenu from "@/components/Header/MobileMenu";
// import Context from "@/context/Context";
// import Store from "@/redux/store";
// import { Provider } from "react-redux";

// export const metadata = {
//   title: "Admission Guide - Online Courses & Education NEXTJS14 Template",
//   description: "Online Courses & Education NEXTJS14 Template",
// };

// const ApplyNowLayout = () => {
//   return (
//     <>
//       <Provider store={Store}>
//         <Context>
//           <MobileMenu />
//           <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
//           <ApplyNowPage />
//           <FooterThree />
//         </Context>
//       </Provider>
//     </>
//   );
// };

// export default ApplyNowLayout;

"use client";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterThree from "@/components/Footer/Footer-Three";
import ApplyNowPage from "./(apply-now)";

const ApplyNowLayout = () => {
  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
        <ApplyNowPage />

        <FooterThree />
      </Context>
    </Provider>
  );
};

export default ApplyNowLayout;
