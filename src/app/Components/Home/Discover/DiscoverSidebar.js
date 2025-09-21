import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import DiscordIcon from "@/app/icons/DiscordIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import SpotifyIcon from "@/app/icons/SpotifyIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
import Link from "next/link";
import React from "react";

export default function DiscoverSidebar({ categories }) {
  return (
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
        <Link href="/>" className="text-sm transition duration-300 hover:text-main-yellow">
          HABERLER
        </Link>
        <Link href="/>" className="text-sm transition duration-300 hover:text-main-yellow">
          ETKİNLİKLER
        </Link>
        <Link href="/>" className="text-sm transition duration-300 hover:text-main-yellow">
          MÜZİKLER
        </Link>
        <Link href="/>" className="text-sm transition duration-300 hover:text-main-yellow">
          VİDEOLAR
        </Link>
        <Link href="/>" className="text-sm transition duration-300 hover:text-main-yellow">
          İLETİŞİM
        </Link>
      </div>
      <div>
        <p className="text-sm text-tertiary-gray">© RAPKOLOGY All Rights Are Reserved 2022.</p>
      </div>
    </div>
  );
}
