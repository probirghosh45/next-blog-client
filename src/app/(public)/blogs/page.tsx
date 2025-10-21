/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Explore insightful articles on web development, React, Next.js, and modern programming concepts. Stay updated with the latest trends and tutorials from the Next Blog community.",
};

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div>
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
