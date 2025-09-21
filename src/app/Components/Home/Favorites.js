"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useWindowWidth from "@/app/customHooks/useWindowWidth";

export default function Favorites() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const width = useWindowWidth();

  const slides = [
    {
      id: 1,
      images: "/images/album-1.png",
    },
    {
      id: 2,
      images: "/images/album-2.png",
    },
    {
      id: 3,
      images: "/images/album-1.png",
    },
    {
      id: 4,
      images: "/images/album-2.png",
    },
  ];

  return (
    <div className="mb-[160px]">
      <div className="relative w-fit">
        <img src="/images/favorites-bg.png" alt="" />
        <div className="flex absolute top-[20px] xxs:top-[28px] sm:top-[30px] left-1/2 -translate-x-1/2 items-center justify-center gap-8 w-[80%] sm:w-full">
          <img src="/images/youtube-logo.png" className="w-[100px] sm:w-auto" alt="" />
          <img src="/images/spotify-logo.png" className="w-[100px] sm:w-auto" alt="" />
        </div>
      </div>

      <div className="relative min-h-[264px] flex items-center flex-col lg:flex-row gap-12 mt-12 lg:mt-0 lg:gap-0">
        <div className="container mx-auto">
          <h2 className="font-saira-condensed font-bold text-4xl md:text-6xl text-center lg:text-left">AYIN FAVORİLERİ</h2>
        </div>

        <div className="relative lg:absolute top-0 left-0 lg:left-1/2 w-full lg:w-1/2 ">
          <Swiper
            loop={true}
            spaceBetween={width < 640 ? 16 : 52}
            slidesPerView={width < 640 ? 1.2 : 2.5}
            className="w-full"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.map((item) => (
              <SwiperSlide key={item?.id} className="">
                <img src={item?.images} className="w-full xl:w-[272px] h-full xl:h-[266px] object-fill" alt="" />
              </SwiperSlide>
            ))}
            <div className="w-[80%] mx-auto mt-12 h-[5px] flex items-center">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    swiperRef.current.slideToLoop(index);
                    setActiveIndex(index);
                  }}
                  className={`cursor-pointer w-full h-full  ${index === activeIndex ? "bg-main-yellow" : "bg-main-gray"}`}
                ></button>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
