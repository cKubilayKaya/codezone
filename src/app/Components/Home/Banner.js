"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CustomButton from "../CustomButton";
import "swiper/css";
import SlideNextIcon from "@/app/icons/SlideNextIcon";
import SlidePrevIcon from "@/app/icons/SlidePrevIcon";

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

  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12  items-center justify-center cursor-pointer hidden lg:flex">
      <SlidePrevIcon />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12  items-center justify-center cursor-pointer hidden lg:flex">
      <SlideNextIcon />
    </button>
  );

  return (
    <div className="relative pb-10">
      <CustomPrevArrow onClick={() => swiperRef.current?.slidePrev()} />
      <CustomNextArrow onClick={() => swiperRef.current?.slideNext()} />

      <Swiper
        className=""
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="py-8 relative min-h-[700px] flex flex-col-reverse lg:flex-row">
              <div className="">
                <img src={item.image} className="lg:absolute top-0 left-0" alt="" />
                <img src="/images/slider-bg.png" className="absolute lg:absolute bottom-5 lg:bottom-0 left-0 w-full" alt="" />
              </div>
              <div className="lg:w-[570px] lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2 mt-20 text-center lg:text-left lg:mt-10 z-3">
                <h2
                  className={`font-bold text-[30px] lg:text-5xl leading-8 mb-4 lg:leading-14 ${
                    item?.textColor === "white" ? "text-foreground" : "lg:text-background"
                  }`}
                >
                  {item.title}
                </h2>
                <p className={`lg:mt-6 lg:w-[80%] mb-6 ${item?.textColor === "white" ? "text-foreground" : "lg:text-background"}`}>{item.text}</p>
                <CustomButton />
                <div className="items-center mt-14 gap-2 hidden lg:flex">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
