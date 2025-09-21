import React from "react";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Link from "next/link";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export default function DiscoverBlogs({ gridType, blogs }) {
  return (
    <div className={gridType === "ONE_GRID" ? "flex flex-col gap-10" : "grid grid-cols-1 sm:grid-cols-2 gap-5"}>
      {blogs.map((item) =>
        gridType === "ONE_GRID" ? (
          <div className="flex gap-5 group flex-col sm:flex-row" key={item?.attributes?.slug}>
            <div className="flex flex-col justify-between ">
              <img src={item?.attributes?.img} className="mb-8 w-full sm:w-[300px] h-full sm:h-[200px] object-cover max-w-none" alt="" />
              <p className="text-secondary-gray">{format(new Date(item?.updatedAt), "d MMMM yyyy", { locale: tr })}</p>
            </div>
            <div className="w-full">
              <div className="flex items-center gap-2 mb-8">
                <img src={item?.attributes?.author?.avatar} alt="" />
                <p>{item?.attributes?.author?.name}</p>
              </div>
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="line-clamp-4 font-saira-condensed text-[25px] font-bold leading-7 uppercase transition duration-300 group-hover:text-main-yellow"
              >
                {item?.attributes?.title}
              </Link>
              <div className="h-[1px] w-full bg-secondary-gray my-[30px]"></div>
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
        ) : (
          <div className="flex flex-col gap-5 group" key={item?.id}>
            <div className="flex flex-col justify-between ">
              <img src={item?.attributes?.img} className="mb-8 w-auto h-auto object-cover max-w-none" alt="" />
              <p className="text-secondary-gray">{format(new Date(item?.updatedAt), "d MMMM yyyy", { locale: tr })}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-8">
                <img src={item?.attributes?.author?.avatar} alt="" />
                <p>{item?.attributes?.author?.name}</p>
              </div>
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="line-clamp-4 font-saira-condensed text-[25px] font-bold leading-7 uppercase transition duration-300 group-hover:text-main-yellow"
              >
                {item?.attributes?.title}
              </Link>
              <div className="h-[1px] w-full bg-secondary-gray my-[30px]"></div>
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
        )
      )}
    </div>
  );
}
