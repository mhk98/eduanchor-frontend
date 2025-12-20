"use client";

import React from "react";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import SwedenDetails from "@/components/Course-Details/Sweden-Details";
import FooterThree from "@/components/Footer/Footer-Three";

const SwedenPage = ({ getParams }) => {
  //   const router = useRouter();
  //   const postId = parseInt(getParams.courseId);
  //   const courseList = JSON.parse(JSON.stringify(CourseData.courseTab));

  //   const checkMatch = courseList.find((course) => course.id === postId);

  //   useEffect(() => {
  //     if (postId && checkMatch === undefined) {
  //       router.push("/course-card-2");
  //     }

  //     sal({
  //       threshold: 0.01,
  //       once: true,
  //     });
  //   }, [checkMatch, router]);

  return (
    <Provider store={Store}>
      <Context>
        <MobileMenu />
        <HeaderStyleTen headerSticky="" headerType={true} />
        <Cart />

        <div className="rbt-section-overlayping-top rbt-section-gapBottom mt-8">
          <div className="inner">
            <div className="container">
              <SwedenDetails
              // checkMatchCourses={checkMatch !== undefined ? checkMatch : ""}
              />
            </div>
          </div>
        </div>

        {/* <CourseActionBottom
        /> */}

        <Separator />
        <FooterThree />
      </Context>
    </Provider>
  );
};

export default SwedenPage;
