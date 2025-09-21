"use client";
import React, { useState } from "react";
import TrendsIcon from "../../icons/TrendsIcon";
import Link from "next/link";
import CustomButton from "../CustomButton";
import ArrowRightIcon from "../../icons/ArrowRightIcon";
import { allBlogs } from "@/data/allBlogs";

export default function Trends({ cols = 3 }) {
  const [trends, setTrends] = useState(allBlogs?.filter((i) => i?.attributes?.trend === true));

  return (
    <div className="container mx-auto my-20 font-saira-condensed">
      <div className="flex items-center gap-5 mb-20">
        <h2 className="font-bold text-4xl md:text-6xl">TRENDLER</h2>
        <TrendsIcon className="w-[36px] h-[36px] md:w-[55px] md:h-[55px]" />
      </div>
      <div className={`grid grid-cols-1 ${cols === 3 && "lg:grid-cols-3"} ${cols === 2 && "lg:grid-cols-2"} sm:grid-cols-2  gap-x-5 gap-y-10 mb-20`}>
        {trends.map((item, index) => (
          <div key={item?.attributes?.slug} className="min-h-[190px] flex gap-4 lg:gap-16 group">
            <div>
              <h2 className="text-main-gray font-bold text-6xl transition duration-300 group-hover:text-main-yellow">0{index + 1}</h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <img src={item?.attributes?.author?.avatar} alt="" />
                <p className="font-saira">{item?.attributes?.author?.name}</p>
              </div>
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="text-[25px] uppercase font-bold leading-7 line-clamp-3 transition duration-300 group-hover:text-main-yellow"
              >
                {item?.attributes?.title}
              </Link>
              <div className="bg-secondary-black h-[1px] w-full"></div>
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="font-saira transition duration-300 group-hover:text-main-yellow flex items-center gap-2 relative"
              >
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
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton variant="white" text="Tümünü Gör" href="/blogs" />
      </div>
    </div>
  );
}
