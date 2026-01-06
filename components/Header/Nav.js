// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// import { useState } from "react";

// import MenuData from "../../data/MegaMenu.json";

// import CourseLayout from "./NavProps/CourseLayout";
// import PageLayout from "./NavProps/PageLayout";
// import ElementsLayout from "./NavProps/ElementsLayout";

// import addImage from "../../public/images/service/mobile-cat.jpg";

// const Nav = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(null);

//   const pathname = usePathname();

//   const isActive = (href) => pathname.startsWith(href);

//   const toggleMenuItem = (item) => {
//     setActiveMenuItem(activeMenuItem === item ? null : item);
//   };

//   return (
//     <nav className="mainmenu-nav">
//       <ul className="mainmenu">
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             className={`${activeMenuItem === "home" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("home")}
//             href="/"
//           >
//             Home
//           </Link>
//         </li>

//         <li className="has-dropdown has-menu-child-item">
//           <Link
//             className={`${activeMenuItem === "country" ? "open" : ""}`}
//             href="#"
//             onClick={() => toggleMenuItem("country")}
//           >
//             Country
//             <i className="feather-chevron-down"></i>
//           </Link>
//           <ul
//             className={`submenu ${
//               activeMenuItem === "country" ? "active d-block" : ""
//             }`}
//           >
//             {MenuData &&
//               MenuData.menuData.map((data, index) => {
//                 if (data.menuType === "default-dropdown") {
//                   const elements = data.menuItems?.map((value, innerIndex) => (
//                     <li className="has-dropdown" key={innerIndex}>
//                       <Link
//                       className={
//                         isActive(value.link) ? "active" : ""
//                       }
//                       href={value.link}
//                       >{value.title}</Link>
//                     </li>
//                   ));
//                   return elements;
//                 }
//                 return null;
//               })}
//           </ul>
//         </li>
//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="/blog-minimal"
//             className={`${activeMenuItem === "blog" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("blog")}
//           >
//             Blogs
//             {/* <i className="feather-chevron-down"></i> */}
//           </Link>
//           {/* <div
//             className={`rbt-megamenu grid-item-3 ${
//               activeMenuItem === "blog" ? "active d-block" : ""
//             }`}
//           >
//             <div className="wrapper">
//               <div className="row row--15">
//                 <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
//                   <h3 className="rbt-short-title">Blog Styles</h3>
//                   <ul className="mega-menu-item">
//                     {MenuData &&
//                       MenuData.menuData.map((data, index) => {
//                         if (data.menuType === "grid-item-5") {
//                           const elements = data.menuItems?.map(
//                             (value, innerIndex) =>
//                               value.id <= 7 && (
//                                 <li key={innerIndex}>
//                                   <Link
//                                     className={
//                                       isActive(value.link) ? "active" : ""
//                                     }
//                                     href={
//                                       value.coming ? "/maintenance" : value.link
//                                     }
//                                   >
//                                     {value.title}
//                                     {value.coming ? (
//                                       <span className="rbt-badge-card ms-3">
//                                         {value.coming}
//                                       </span>
//                                     ) : value.subTitle ? (
//                                       <span className="rbt-badge-card">
//                                         {value.subTitle}
//                                       </span>
//                                     ) : (
//                                       ""
//                                     )}
//                                   </Link>
//                                 </li>
//                               )
//                           );
//                           return elements;
//                         }
//                       })}
//                   </ul>
//                 </div>
//                 <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
//                   <h3 className="rbt-short-title">Get Started</h3>
//                   <ul className="mega-menu-item">
//                     {MenuData &&
//                       MenuData.menuData.map((data, index) => {
//                         if (data.menuType === "grid-item-5") {
//                           const elements = data.menuItems?.map(
//                             (value, innerIndex) =>
//                               value.id > 7 &&
//                               value.id <= 14 && (
//                                 <li key={innerIndex}>
//                                   <Link
//                                     className={
//                                       isActive(value.link) ? "active" : ""
//                                     }
//                                     href={
//                                       value.coming ? "/maintenance" : value.link
//                                     }
//                                   >
//                                     {value.title}
//                                     {value.coming ? (
//                                       <span className="rbt-badge-card ms-3">
//                                         {value.coming}
//                                       </span>
//                                     ) : value.subTitle ? (
//                                       <span className="rbt-badge-card">
//                                         {value.subTitle}
//                                       </span>
//                                     ) : (
//                                       ""
//                                     )}
//                                   </Link>
//                                 </li>
//                               )
//                           );
//                           return elements;
//                         }
//                       })}
//                   </ul>
//                 </div>
//                 <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
//                   <div className="rbt-ads-wrapper">
//                     <Link className="d-block" href="#">
//                       <Image src={addImage} alt="Education Images" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </li>

//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="/about-us-02"
//             className={`${activeMenuItem === "team" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("team")}
//           >
//             Our Team
//           </Link>

//         </li>

//         <li className="with-megamenu has-menu-child-item position-static">
//           <Link
//             href="/admission-guide"
//             className={`${activeMenuItem === "blog" ? "open" : ""}`}
//             onClick={() => toggleMenuItem("blog")}
//           >
//             Our Services
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };
// export default Nav;

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import MenuData from "../../data/MegaMenu.json";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const pathname = usePathname();

  const isActive = (href) => pathname === href || pathname.startsWith(href);

  const toggleMenuItem = (item) => {
    setActiveMenuItem(activeMenuItem === item ? null : item);
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {/* Home */}
        <li className="with-megamenu position-static">
          <Link
            className={isActive("/") ? "active" : ""}
            href="/"
            onClick={() => toggleMenuItem("home")}
          >
            Home
          </Link>
        </li>

        {/* Country */}
        <li className="has-dropdown has-menu-child-item">
          <Link
            className={activeMenuItem === "country" ? "open active" : ""}
            href="javascript:void(0)"
            onClick={() => toggleMenuItem("country")}
          >
            Country <i className="feather-chevron-down"></i>
          </Link>
          <ul
            className={`submenu ${
              activeMenuItem === "country" ? "active d-block" : ""
            }`}
          >
            {MenuData?.menuData.map((data) =>
              data.menuType === "default-dropdown"
                ? data.menuItems?.map((value, innerIndex) => (
                    <li className="" key={innerIndex}>
                      <Link
                        className={isActive(value.link) ? "active" : ""}
                        href={value.link}
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))
                : null
            )}
          </ul>
        </li>

        {/* Our Services */}
        <li className="with-megamenu position-static">
          <Link
            href="/admission-guide"
            className={isActive("/admission-guide") ? "active" : ""}
            onClick={() => toggleMenuItem("services")}
          >
            Services
          </Link>
        </li>

        {/* Our Team */}
        <li className="with-megamenu position-static">
          <Link
            href="/about-us-02"
            className={isActive("/about-us-02") ? "active" : ""}
            onClick={() => toggleMenuItem("team")}
          >
            Our Team
          </Link>
        </li>

        <li className="with-megamenu position-static">
          <Link
            href="/gallery"
            className={isActive("/gallery") ? "active" : ""}
            onClick={() => toggleMenuItem("gallery")}
          >
            Gallery
          </Link>
        </li>

        <li className="with-megamenu position-static">
          <Link
            href="/blog-list"
            className={isActive("/blog-list") ? "active" : ""}
            onClick={() => toggleMenuItem("blog-list")}
          >
            Blog
          </Link>
        </li>

        {/* Blogs */}
        <li className="with-megamenu position-static">
          <Link
            href="/contact-us"
            className={isActive("/blog-minimal") ? "active" : ""}
            onClick={() => toggleMenuItem("contact")}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
