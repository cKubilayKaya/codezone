"use client";
import React from "react";
import CompassIcon from "../icons/CompassIcon";
import SearchIcon from "../icons/SearchIcon";
import BarStraight from "../icons/BarStraight";
import BarDot from "../icons/BarDot";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import DiscordIcon from "../icons/DiscordIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import Link from "next/link";
import { blogData } from "../../data";

export default function Discover() {
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
    <div className="container mx-auto my-20 grid grid-cols-[2fr_1fr] gap-30">
      <div>
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-5">
            <h2 className="font-saira-condensed font-bold text-6xl">KEŞFET</h2>
            <CompassIcon />
          </div>
          <div className="flex items-center justify-center gap-4">
            <SearchIcon />
            <BarStraight />
            <BarDot />
          </div>
        </div>
        <div className="flex flex-col gap-20">
          {blogs.map((item) => (
            <div className="flex gap-5" key={item?.id}>
              <div className="flex flex-col justify-between ">
                <img src={item?.image} className="mb-8 w-auto h-auto max-w-none" alt="" />
                <p className="text-secondary-gray">29 Mart 2022</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <img src={item?.user?.avatar} alt="" />
                  <p>{item?.user?.name}</p>
                </div>
                <h2 className="line-clamp-4 font-saira-condensed text-[25px] font-bold leading-7 uppercase">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Mauris nec leo non libero sodales lobortis. Quisque a neque preti ...
                </h2>
                <div className="h-[1px] w-full bg-secondary-gray my-[30px]"></div>
                <Link href="/">Daha Fazla Oku</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="font-saira-condensed font-bold text-[40px] leading-10 mb-5">NE GÖRMEK İSTERSİN?</h2>
          <div className="flex items-center flex-wrap gap-[10px] mb-[200px]">
            {categories?.map((item) => (
              <button key={item?.id} className="py-[10px] px-5 border border-white cursor-pointer hover:bg-main-gray">
                {item?.name}
              </button>
            ))}
          </div>
          <h2 className="font-saira-condensed font-bold text-[40px] leading-10 mb-12">GELİŞMELERDEN İLK SEN HABERDAR OL!</h2>
          <div className="w-full relative mb-12">
            <input type="text" className="border-b h-[38px] border-b-secondary-gray w-full outline-0 p-2 font-saira text-sm font-bold" placeholder="EMAIL" />
            <button className="h-[38px] flex items-center gap-3 absolute right-0 top-0 bottom-0 m-auto cursor-pointer">
              <span className="block font-saira text-sm font-bold text-main-yellow">GÖNDER</span>
              <ArrowRightIcon />
            </button>
          </div>
          <div className="flex items-center gap-5 mb-20">
            <FacebookIcon />
            <TwitterIcon />
            <DiscordIcon />
            <SpotifyIcon />
            <YoutubeIcon />
          </div>
          <div className="grid grid-cols-3 gap-10 mb-10">
            <Link href="/>" className="text-sm">
              HABERLER
            </Link>
            <Link href="/>" className="text-sm">
              ETKİNLİKLER
            </Link>
            <Link href="/>" className="text-sm">
              MÜZİKLER
            </Link>
            <Link href="/>" className="text-sm">
              VİDEOLAR
            </Link>
            <Link href="/>" className="text-sm">
              İLETİŞİM
            </Link>
          </div>
          <div>
            <p className="text-sm text-tertiary-gray">© RAPKOLOGY All Rights Are Reserved 2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
