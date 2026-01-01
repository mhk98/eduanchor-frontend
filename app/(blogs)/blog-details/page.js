"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const BlogLayout = ({ params }) => {
  console.log("params", params);
  const router = useRouter();

  useEffect(() => {
    router.push("/blog-list");
  }, []);
};

export default BlogLayout;
