"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Favorites() {
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
          <Swiper spaceBetween={52} slidesPerView={2.5} className="w-full">
            <SwiperSlide>
              <img src="/images/album-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/album-2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/album-1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/album-2.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
