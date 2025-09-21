"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowWidth from "@/app/customHooks/useWindowWidth";

export default function DiscoverCategories({ categories, activeCategory, setActiveCategory }) {
  const width = useWindowWidth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[100px]" />;
  }

  return (
    <div>
      <h2 className="font-saira-condensed font-bold text-[40px] leading-10 mb-5">NE GÖRMEK İSTERSİN?</h2>
      {width < 1280 ? (
        <Swiper loop={true} spaceBetween={20} slidesPerView="auto" className="w-full" touchStartPreventDefault={false} preventClicksPropagation={false}>
          {categories?.map((item) => (
            <SwiperSlide key={item?.id} className="!w-auto">
              <div
                role="button"
                onClick={() => setActiveCategory(item)}
                className={`py-[10px] px-5 border cursor-pointer hover:bg-main-gray ${
                  activeCategory?.id === item?.id ? "bg-main-yellow text-main-black border-main-yellow hover:bg-main-yellow whitespace-nowrap" : "border-white"
                }`}
              >
                {item?.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center flex-wrap gap-[10px]">
          {categories?.map((item) => (
            <button
              key={item?.id}
              onClick={() => setActiveCategory(item)}
              className={`py-[10px] px-5 border cursor-pointer hover:bg-main-gray ${
                activeCategory?.id === item?.id ? "bg-main-yellow text-main-black border-main-yellow hover:bg-main-yellow" : "border-white"
              }`}
            >
              {item?.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
