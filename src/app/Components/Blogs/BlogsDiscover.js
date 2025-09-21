import React from "react";
import BlogsDiscoverHeader from "./BlogsDiscoverHeader";
import BlogsDiscoverCategories from "./BlogsDiscoverCategories";
import BlogsDiscoverContent from "./BlogsDiscoverContent";

export default function BlogsDiscover({ gridType, setGridType, activeCategory, setActiveCategory, filteredBlogs, categories }) {
  return (
    <div className="container mx-auto">
      <BlogsDiscoverHeader gridType={gridType} setGridType={setGridType} />
      <BlogsDiscoverCategories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <BlogsDiscoverContent filteredBlogs={filteredBlogs} gridType={gridType} />
    </div>
  );
}
