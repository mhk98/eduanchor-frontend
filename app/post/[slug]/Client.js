"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"; // Added hooks
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogBreadCrumb from "@/components/Common/Blog-BreadCrumb";
import FooterThree from "@/components/Footer/Footer-Three";

export default function SingleBlog({ getAllblog }) {
  const pathname = usePathname();
  const [matchedBlog, setMatchedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      // 1. Extract ID from pathname
      const parts = pathname.split("/");
      const lastPart = parts[parts.length - 1];
      const match = lastPart.match(/\d+/);
      const blogId = match ? parseInt(match[0]) : null;

      if (!blogId) return;

      try {
        const response = await fetch(
          `https://server.eaconsultancy.info/api/v1/blog/${blogId}`,
          {
            cache: "no-store",
          },
        );
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setMatchedBlog(data?.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [pathname]); // Re-run if URL changes

  console.log("matchedBlog", matchedBlog);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <div className="rbt-overlay-page-wrapper">
            {/* Pass the dynamic data here */}
            <BlogBreadCrumb matchedBlog={matchedBlog} />

            <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
              <div className="blog-content-wrapper rbt-article-content-wrapper">
                <BlogDetails matchedBlog={matchedBlog || ""} />
              </div>
            </div>
          </div>

          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
}
