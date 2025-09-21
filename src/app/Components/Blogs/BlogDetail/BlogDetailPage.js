"use client";
import React, { useState } from "react";
import BlogDetailContent from "@/app/Components/Blogs/BlogDetail/BlogDetailContent";
import BlogsDetailSidebar from "@/app/Components/Blogs/BlogDetail/BlogsDetailSidebar";
import { useParams } from "next/navigation";
import { allBlogs } from "@/data/allBlogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(allBlogs?.find((i) => i?.attributes?.slug === slug || ""));

  const breadcrumbData = [{ label: "ANA SAYFA", href: "/" }, { label: "BLOG", href: "/blogs" }, { label: blog?.attributes?.title }];

  return (
    <div className="mt-[160px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-30">
        <BlogDetailContent breadcrumbData={breadcrumbData} blog={blog} allBlogs={allBlogs} />
        <BlogsDetailSidebar />
      </div>
    </div>
  );
}
