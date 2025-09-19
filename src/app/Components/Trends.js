import React from "react";
import TrendsIcon from "../icons/TrendsIcon";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Trends() {
  const trends = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      user: {
        name: "Jonathan Stewart",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 2,
      title: "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
      user: {
        name: "Steve Rogerson",
        avatar: "/images/avatar-2.png",
      },
    },
    {
      id: 3,
      title: "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus",
      user: {
        name: "Ismail Kor",
        avatar: "/images/avatar-3.png",
      },
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      user: {
        name: "Jonathan Stewart",
        avatar: "/images/avatar.png",
      },
    },
    {
      id: 5,
      title: "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
      user: {
        name: "Steve Rogerson",
        avatar: "/images/avatar-2.png",
      },
    },
    {
      id: 6,
      title: "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus",
      user: {
        name: "Ismail Kor",
        avatar: "/images/avatar-3.png",
      },
    },
  ];
  return (
    <div className="container mx-auto my-20 font-saira-condensed">
      <div className="flex items-center gap-5 mb-20">
        <h2 className="font-bold text-6xl ">TRENDLER</h2>
        <TrendsIcon />
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 mb-20">
        {trends.map((item) => (
          <div key={item?.id} className="min-h-[190px] flex gap-16">
            <div>
              <h2 className="text-main-gray font-bold text-6xl">{item?.id < 10 && `0${item?.id}`}</h2>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <img src={item?.user?.avatar} alt="" />
                <p className="font-saira">{item?.user?.name}</p>
              </div>
              <p className="text-[25px] uppercase font-bold leading-7 line-clamp-3">{item?.title}</p>
              <div className="bg-secondary-black h-[1px] w-full"></div>
              <Link href="/" className="font-saira">
                Daha Fazla Oku
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <CustomButton variant="white" text="Tümünü Gör" />
      </div>
    </div>
  );
}
