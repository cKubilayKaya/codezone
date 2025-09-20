"use client";
import React, { useRef, useState } from "react";
import CompassIcon from "../icons/CompassIcon";
import SearchIcon from "../icons/SearchIcon";
import BarStraight from "../icons/BarStraight";
import BarDot from "../icons/BarDot";
import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowRightIcon2 from "../icons/ArrowRightIcon2";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../Components/CustomButton";
import "swiper/css";
import PlayIcon from "../icons/PlayIcon";

export default function blogs() {
  const [gridType, setGridType] = useState("ONE_GRID");
  const [activeCategory, setActiveCategory] = useState(1);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/blog-slide-1.png",
      title: "LOREM FT - IPSUM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      textColor: "white",
    },
    {
      id: 2,
      image: "/images/blog-slide-1.png",
      title: "LOREM FT - IPSUM",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
      textColor: "black",
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Türk Rap",
    },
    {
      id: 2,
      name: "Yabancı Rap",
    },
    {
      id: 3,
      name: "Rap Haberleri",
    },
    {
      id: 4,
      name: "Haftanın Klipleri",
    },
    {
      id: 5,
      name: "Ayın Klipleri",
    },
    {
      id: 6,
      name: "Rap Sohbetleri",
    },
    {
      id: 7,
      name: "Rap Müsabakaları",
    },
  ];

  const blogs = [
    {
      id: 1,
      image: "/images/discovery-blog-1.png",
      date: "29 Mart 2022",
      user: {
        avatar: "/images/avatar.png",
        name: "Jonathan Stewart",
      },
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...",
    },
    {
      id: 2,
      image: "/images/discovery-blog-1.png",
      date: "29 Mart 2022",
      user: {
        avatar: "/images/avatar.png",
        name: "Jonathan Stewart",
      },
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...",
    },
    {
      id: 3,
      image: "/images/discovery-blog-1.png",
      date: "29 Mart 2022",
      user: {
        avatar: "/images/avatar.png",
        name: "Jonathan Stewart",
      },
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...",
    },
    {
      id: 4,
      image: "/images/discovery-blog-1.png",
      date: "29 Mart 2022",
      user: {
        avatar: "/images/avatar.png",
        name: "Jonathan Stewart",
      },
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.  Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...",
    },
  ];

  return (
    <div className=" mt-20">
      <div className="bg-main-yellow pt-20">
        <p className="container mx-auto flex items-center gap-5 text-main-black text-sm">
          <span>ANA SAYFA</span>
          <span>
            <ArrowRightIcon2 />
          </span>
          <span>BLOG</span>
        </p>
        <h2 className="my-8 font-saira-condensed font-bold text-4xl md:text-6xl container mx-auto text-main-black">BLOG</h2>
        <div className="flex flex-col items-end">
          <div className="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">
            <Swiper
              className="w-full"
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative">
                    <div className="relative">
                      <img src={item.image} className="w-full" alt="" />
                      <h2 className={`font-bold font-saira-condensed text-[40px] leading-14 absolute bottom-[40px] left-[40px]`}>{item.title}</h2>
                      <div className="absolute bottom-[40px] right-[40px]">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="flex items-center mt-7 gap-2 lg:px-[40px]">
                      <Link href="/" className="text-main-black font-saira-condensed text-[20px] sm:text-[25px] uppercase font-bold leading-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti
                      </Link>
                      <div className="flex items-center gap-2">
                        {slides.map((item, index) => (
                          <button
                            key={item.id}
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
              <div className="flex gap-5 flex-col sm:flex-row">
                <img src="/images/blog-slide-image-1.png" alt="" />
                <Link href="/" className="leading-6 font-saira-condensed font-bold text-[20px] sm:text-[25px] text-main-black uppercase">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales
                </Link>
              </div>
              <div className="flex gap-5 flex-col sm:flex-row">
                <img src="/images/blog-slide-image-1.png" alt="" />
                <Link href="/" className="leading-6 font-saira-condensed font-bold text-[20px] sm:text-[25px] text-main-black uppercase">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales
                </Link>
              </div>
              <div className="flex gap-5 flex-col sm:flex-row">
                <img src="/images/blog-slide-image-1.png" alt="" />
                <Link href="/" className="leading-6 font-saira-condensed font-bold text-[20px] sm:text-[25px] text-main-black uppercase">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales
                </Link>
              </div>
              <div className="flex gap-5 flex-col sm:flex-row">
                <img src="/images/blog-slide-image-1.png" alt="" />
                <Link href="/" className="leading-6 font-saira-condensed font-bold text-[20px] sm:text-[25px] text-main-black uppercase">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales
                </Link>
              </div>
            </div>
          </div>
          <img src="/images/live-bg-texture.png" className="w-full" alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-13">
          <div className="flex items-center gap-5">
            <h2 className="font-saira-condensed font-bold text-4xl md:text-6xl">KEŞFET</h2>
            <CompassIcon />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="cursor-pointer">
              <SearchIcon />
            </button>
            <button className="cursor-pointer" onClick={() => setGridType("ONE_GRID")}>
              <BarStraight color={gridType === "ONE_GRID" ? "rgba(240, 231, 77, 1)" : "white"} />
            </button>
            <button className="cursor-pointer" onClick={() => setGridType("TWO_GRID")}>
              <BarDot color={gridType === "TWO_GRID" ? "rgba(240, 231, 77, 1)" : "white"} />
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center flex-wrap gap-5 mb-20">
            {categories?.map((item) => (
              <button
                key={item?.id}
                onClick={() => setActiveCategory(item?.id)}
                className={`py-[10px] px-5 border  cursor-pointer hover:bg-main-gray ${
                  activeCategory === item?.id ? "bg-main-yellow text-main-black border-main-yellow hover:bg-main-yellow" : "border-white"
                }`}
              >
                {item?.name}
              </button>
            ))}
          </div>
          <div className={gridType === "ONE_GRID" ? "grid grid-cols-1  sm:grid-cols-2 gap-5" : "grid grid-cols-4 gap-5"}>
            {blogs.map((item) =>
              gridType === "ONE_GRID" ? (
                <div className="flex gap-5 group flex-col lg:flex-row" key={item?.id}>
                  <div className="flex flex-col justify-between ">
                    <img src={item?.image} className="mb-8 w-auto h-auto max-w-none" alt="" />
                    <p className="text-secondary-gray">29 Mart 2022</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-8">
                      <img src={item?.user?.avatar} alt="" />
                      <p>{item?.user?.name}</p>
                    </div>
                    <Link
                      href="/"
                      className="line-clamp-4 font-saira-condensed text-[25px] font-bold leading-7 uppercase transition duration-300 group-hover:text-main-yellow"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti
                      ...
                    </Link>
                    <div className="h-[1px] w-full bg-secondary-gray my-[30px]"></div>
                    <Link href="/" className="font-saira transition duration-300 group-hover:text-main-yellow flex items-center gap-2 relative">
                      Daha Fazla Oku
                      <span
                        className="opacity-0 translate-x-[-10px] scale-75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
               transition-all duration-300"
                      >
                        <ArrowRightIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5 group" key={item?.id}>
                  <div className="flex items-center gap-2">
                    <img src={item?.user?.avatar} alt="" />
                    <p>{item?.user?.name}</p>
                  </div>
                  <div className="flex flex-col justify-between ">
                    <img src={item?.image} className="mb-8 w-auto h-auto max-w-none" alt="" />
                    <p className="text-secondary-gray">29 Mart 2022</p>
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="line-clamp-4 font-saira-condensed text-[25px] font-bold leading-7 uppercase transition duration-300 group-hover:text-main-yellow"
                    >
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti
                      ...
                    </Link>
                    <div className="h-[1px] w-full bg-secondary-gray my-[30px]"></div>
                    <Link href="/" className="font-saira transition duration-300 group-hover:text-main-yellow flex items-center gap-2 relative">
                      Daha Fazla Oku
                      <span
                        className="opacity-0 translate-x-[-10px] scale-75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
               transition-all duration-300"
                      >
                        <ArrowRightIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
