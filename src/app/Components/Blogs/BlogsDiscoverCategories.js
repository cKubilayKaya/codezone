import React from "react";

export default function BlogsDiscoverCategories({ categories, setActiveCategory, activeCategory }) {
  return (
    <div className="flex items-center flex-wrap gap-5 mb-20">
      {categories?.map((item) => (
        <button
          key={item?.id}
          onClick={() => setActiveCategory(item)}
          className={`py-[10px] px-5 border  cursor-pointer hover:bg-main-gray ${
            activeCategory?.id === item?.id ? "bg-main-yellow text-main-black border-main-yellow hover:bg-main-yellow" : "border-white"
          }`}
        >
          {item?.name}
        </button>
      ))}
    </div>
  );
}
