import React from "react";

export default function DiscoverCategories({ categories, activeCategory, setActiveCategory }) {
  return (
    <div>
      <h2 className="font-saira-condensed font-bold text-[40px] leading-10 mb-5">NE GÖRMEK İSTERSİN?</h2>
      <div className="flex items-center flex-wrap gap-[10px]">
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
    </div>
  );
}
