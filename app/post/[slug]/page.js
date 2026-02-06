import SingleBlogClient from "./Client";
async function fetchBlog(slug) {
  const res = await fetch(
    `https://server.eaconsultancy.info/api/v1/blog/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) throw new Error("Blog not found");
  return res.json();
}

// ✅ SEO META HERE
export async function generateMetadata({ params }) {
  const blog = await fetchBlog(params.slug);

  return {
    title: blog.data.metaTitle || blog.data.title,
    description: blog.data.metaDescription,
    openGraph: {
      title: blog.data.metaTitle || blog.data.title,
      description: blog.data.metaDescription,
      images: [`https://server.eaconsultancy.info/${blog.data.image}`],
    },
  };
}

export default async function Page({ params }) {
  const blog = await fetchBlog(params.slug);

  return <SingleBlogClient matchedBlog={blog.data} />;
}
