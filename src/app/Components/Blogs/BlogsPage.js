"use client";
import React, { useEffect, useState } from "react";
import { allCategories } from "@/data/allCategories";
import { allBlogs } from "@/data/allBlogs";
import Breadcrumb from "../../Components/Breadcrumb";
import BlogsSlider from "../../Components/Blogs/BlogsSlider";
import Footer from "../../Components/Footer";
import BlogsDiscover from "../../Components/Blogs/BlogsDiscover";
import Head from "next/head";

export default function BlogsPage() {
  const [gridType, setGridType] = useState("ONE_GRID");
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories && allCategories[0]);
  const [blogs, setBlogs] = useState(allBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [slidersBlogs, setSliderBlogs] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);

  useEffect(() => {
    setFilteredBlogs(blogs.filter((i) => i?.attributes?.category === activeCategory?.name));
    setSliderBlogs(blogs.filter((i) => i?.attributes?.blogSlide === true));
    setTrendBlogs(blogs.filter((i) => i?.attributes?.blogTrend === true));
  }, [activeCategory?.id]);

  const breadcrumbData = [{ label: "ANA SAYFA", href: "/" }, { label: "BLOG" }];

  return (
    <>
      <Head>
        <title>Rapkology - En Yeni Rap Şarkıları ve Müzik Videoları</title>
        <meta
          name="description"
          content="Rapkology Müzik sayfasında en yeni rap şarkıları, müzik videoları ve rap müziği dünyasının en taze melodileriyle tanışın. Rap müziğin ritmini keşfedin ve en sevdiğiniz sanatçıların en son müzikleri hakkında bilgilere ulaşın."
        />
      </Head>
      <div className="mt-20">
        <div className="bg-main-yellow pt-20">
          <div className="container mx-auto">
            <Breadcrumb breadcrumbData={breadcrumbData} />
          </div>
          <h2 className="my-8 font-saira-condensed font-bold text-4xl md:text-6xl container mx-auto text-main-black">BLOG</h2>
          <BlogsSlider slidersBlogs={slidersBlogs} trendBlogs={trendBlogs} />
        </div>
        <BlogsDiscover
          gridType={gridType}
          setGridType={setGridType}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filteredBlogs={filteredBlogs}
          categories={categories}
        />
        <Footer />
      </div>
    </>
  );
}
