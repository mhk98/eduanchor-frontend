// import BackToTop from "@/app/backToTop";
// import BlogListPage from "./(blog-list)";

// // 1. Define your API fetching logic
// async function fetchBlogs() {
//   const response = await fetch(
//     "https://server.eaconsultancy.info/api/v1/blog",
//     {
//       // next: { revalidate: 3600 } // Optional: Cache data for 1 hour
//       cache: "no-store", // Use this if you want fresh data on every request
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch blogs");
//   }

//   return response.json();
// }

// const BlogListLayout = async () => {
//   // 3. Fetch data for the component
//   // Note: Next.js deduplicates this call, so it won't hit the API twice
//   const data = await fetchBlogs();

//   return (
//     <>
//       {/* Ensure you pass the correct array from your API response */}
//       <BlogListPage getAllBlogs={data.data} />
//       <BackToTop />
//     </>
//   );
// };

// export default BlogListLayout;

import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";

async function fetchBlogs() {
  try {
    const response = await fetch(
      "https://server.eaconsultancy.info/api/v1/blog",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      // Log the status to help debugging
      console.error(`API response error: ${response.status}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    // This catches network errors (e.g., DNS issues or Server down)
    console.error("Fetch Error:", error);
    return null;
  }
}

const BlogListLayout = async () => {
  const data = await fetchBlogs();

  // 1. Check if data or data.data exists
  // 2. Provide an empty array [] as a fallback to prevent .map() errors
  const blogs = data?.data || [];

  return (
    <>
      {/* If blogs is empty, the page will still build but show no blogs */}
      <BlogListPage getAllBlogs={blogs} />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
