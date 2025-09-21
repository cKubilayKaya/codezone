"use client";
import React, { useEffect, useState } from "react";
import DiscoverHeader from "./DiscoverHeader";
import DiscoverBlogs from "./DiscoverBlogs";
import DiscoverSidebar from "./DiscoverSidebar";
import { allCategories } from "@/data/allCategories";
import { allBlogs } from "@/data/allBlogs";

export default function Discover() {
  const [gridType, setGridType] = useState("ONE_GRID");
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState(allCategories && allCategories[0]);
  const [blogs, setBlogs] = useState(allBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    setFilteredBlogs(blogs.filter((i) => i?.attributes?.category === activeCategory?.name));
  }, [activeCategory?.id]);

  return (
    <div className="container mx-auto my-20 grid grid-cols-[2fr_1fr] gap-30">
      <div>
        <DiscoverHeader gridType={gridType} setGridType={setGridType} />
        <DiscoverBlogs gridType={gridType} blogs={filteredBlogs} />
      </div>
      <DiscoverSidebar categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </div>
  );
}
