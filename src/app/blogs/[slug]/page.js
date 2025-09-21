import BlogDetailPage from "@/app/Components/Blogs/BlogDetail/BlogDetailPage";
import React from "react";
import { allBlogs } from "@/data/allBlogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b?.attributes?.slug === slug);

  return {
    title: blog ? `Rapkology - ${blog?.attributes?.seo?.metaTitle}` : "Rapkology - En Yeni Rap Şarkıları ve Müzik Videoları",
    description:
      blog?.attributes?.seo?.metaDescription ||
      "Rapkology Müzik sayfasında en yeni rap şarkıları, müzik videoları ve rap müziği dünyasının en taze melodileriyle tanışın. Rap müziğin ritmini keşfedin ve en sevdiğiniz sanatçıların en son müzikleri hakkında bilgilere ulaşın.",
    alternates: {
      canonical: blog ? `https://www.rapkology.com/blogs/${blog?.attributes?.seo?.canonicalURL}` : "https://www.rapkology.com",
    },
  };
}

export default function page() {
  return <BlogDetailPage />;
}
