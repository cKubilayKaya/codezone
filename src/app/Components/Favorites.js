"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Favorites() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
        <div className="flex absolute top-[30px] left-1/2 -translate-x-1/2 items-center justify-center gap-8 w-full">
          <img src="/images/youtube-logo.png" alt="" />
          <img src="/images/spotify-logo.png" alt="" />
        </div>
      </div>

      <div className="relative min-h-[264px] flex items-center">
        <div className="container mx-auto">
          <h2 className="font-saira-condensed font-bold text-6xl">AYIN FAVORİLERİ</h2>
        </div>

        <div className="absolute top-0 left-1/2 w-1/2">
          <Swiper
            loop={true}
            spaceBetween={52}
            slidesPerView={2.5}
            className="w-full"
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              console.log(swiper.activeIndex, activeIndex);
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.map((item) => (
              <SwiperSlide key={item?.id}>
                <img src={item?.images} alt="" />
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
