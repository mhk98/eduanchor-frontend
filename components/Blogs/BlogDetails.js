"use client";
import Image from "next/image";

const BlogDetails = ({ matchedBlog }) => {
  console.log("blogDetails", matchedBlog);

  return (
    <>
      <div className="content">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          {matchedBlog.title}
        </h1>
        <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
          <figure>
            {matchedBlog.image && (
              <div className="mb-10 overflow-hidden rounded-lg">
                <Image
                  src={`https://server.eaconsultancy.info/${matchedBlog.image}`}
                  width={1200}
                  height={650}
                  priority
                  unoptimized
                  alt={matchedBlog.title}
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </figure>
        </div>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: matchedBlog.content }}
        />
      </div>
    </>
  );
};

export default BlogDetails;
