import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Link from "next/link";
import React from "react";

export default function DiscoverBlogs({ gridType, blogs }) {
  return (
    <div className={gridType === "ONE_GRID" ? "flex flex-col gap-20" : "grid grid-cols-2 gap-5"}>
      {blogs.map((item) =>
        gridType === "ONE_GRID" ? (
          <div className="flex gap-5 group" key={item?.id}>
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...
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
  );
}
