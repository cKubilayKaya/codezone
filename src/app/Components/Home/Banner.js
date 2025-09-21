"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../CustomButton";
import "swiper/css";

export default function Banner() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/banner-image-1.png",
      title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      textColor: "white",
    },
    {
      id: 2,
      image: "/images/banner-image-2.png",
      title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      textColor: "black",
    },
  ];

  return (
    <div className="relative pb-10">
      <Swiper
        className=""
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="py-8 relative min-h-[700px]">
              <img src={item.image} className="absolute top-0 left-0" alt="" />
              <div className="w-[570px] absolute right-16 top-1/2 -translate-y-1/2 mt-10  z-3">
                <h2 className={`font-bold text-5xl leading-14 ${item?.textColor === "white" ? "text-foreground" : "text-background"}`}>{item.title}</h2>
                <p className={`mt-6 w-[80%] mb-6 ${item?.textColor === "white" ? "text-foreground" : "text-background"}`}>{item.text}</p>
                <CustomButton />
                <div className="flex items-center mt-14 gap-2">
                  {slides.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => swiperRef.current.slideTo(index)}
                      className={`cursor-pointer w-[10px] h-[10px] rounded-lg transition-all duration-300  ${
                        index === activeIndex ? "bg-main-yellow w-[14px] h-[14px]" : "bg-main-black"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <img src="/images/slider-bg.png" className="absolute bottom-0 left-0 z-2 w-full" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
