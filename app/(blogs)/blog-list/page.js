import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";

// 1. Define your API fetching logic
async function fetchBlogs() {
  const response = await fetch(
    "https://server.eaconsultancy.info/api/v1/blog",
    {
      // next: { revalidate: 3600 } // Optional: Cache data for 1 hour
      cache: "no-store", // Use this if you want fresh data on every request
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return response.json();
}

const BlogListLayout = async () => {
  // 3. Fetch data for the component
  // Note: Next.js deduplicates this call, so it won't hit the API twice
  const data = await fetchBlogs();

  return (
    <>
      {/* Ensure you pass the correct array from your API response */}
      <BlogListPage getAllBlogs={data.data} />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
