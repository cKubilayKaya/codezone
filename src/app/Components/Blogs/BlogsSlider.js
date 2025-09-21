import PlayIcon from "@/app/icons/PlayIcon";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function BlogsSlider({ slidersBlogs, trendBlogs }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-end">
      <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">
        <Swiper
          className="w-full"
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slidersBlogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <div className="relative">
                  <img src={item?.attributes?.img} className="w-full" alt="" />
                  <h2 className={`font-bold font-saira-condensed text-[40px] leading-14 absolute bottom-[40px] left-[40px]`}>{item?.attributes?.title}</h2>
                  <div className="absolute bottom-[40px] right-[40px]">
                    <PlayIcon />
                  </div>
                </div>
                <div className="flex items-center mt-7 gap-2 lg:px-[40px] justify-between">
                  <Link
                    href={`/blogs/${item?.attributes?.slug}`}
                    className="text-main-black font-saira-condensed text-[20px] sm:text-[25px] uppercase font-bold leading-6"
                  >
                    {item?.attributes?.title}
                  </Link>
                  <div className="flex items-center gap-2">
                    {slidersBlogs.map((item, index) => (
                      <button
                        key={item?.attributes?.slug}
                        onClick={() => swiperRef.current.slideTo(index)}
                        className={`cursor-pointer w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-lg transition-all duration-300  ${
                          index === activeIndex ? "bg-main-black w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]" : "bg-main-yellow-op"
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col gap-8">
          {trendBlogs?.map((item) => (
            <div className="flex gap-5 flex-col sm:flex-row" key={item?.attributes?.slug}>
              <img src={item?.attributes?.img} className="w-full sm:w-[175px] h-full sm:h-[104px]" alt="" />
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="leading-6 font-saira-condensed font-bold text-[20px] sm:text-[25px] text-main-black uppercase"
              >
                {item?.attributes?.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <img src="/images/live-bg-texture.png" className="w-full" alt="" />
    </div>
  );
}
