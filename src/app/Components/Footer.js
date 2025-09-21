import React from "react";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import DiscordIcon from "../icons/DiscordIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import Link from "next/link";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function Footer() {
  return (
    <footer className="py-[120px]">
      <div className="container mx-auto flex items-end justify-between gap-20 flex-col lg:flex-row xl:gap-[340px]">
        <div className="w-full">
          <img src="/images/header-logo.png" alt="" />
          <h2 className="font-saira-condensed mt-12 font-bold text-[25px] leading-10 mb-12">GELİŞMELERDEN İLK SEN HABERDAR OL!</h2>
          <div className="w-full relative">
            <input type="text" className="border-b h-[38px] border-b-secondary-gray w-full outline-0 p-2 font-saira text-sm font-bold" placeholder="EMAIL" />
            <button className="h-[38px] flex items-center gap-3 absolute right-0 top-0 bottom-0 m-auto cursor-pointer">
              <span className="block font-saira text-sm font-bold text-main-yellow">GÖNDER</span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-5 mb-8">
            <FacebookIcon />
            <TwitterIcon />
            <DiscordIcon />
            <SpotifyIcon />
            <YoutubeIcon />
          </div>
          <div className="flex items-center gap-5 w-full flex-col sm:flex-row">
            <Link href="/" className="flex-1 text-sm transition duration-300 hover:text-main-yellow text-left block w-full">
              HABERLER
            </Link>
            <Link href="/" className="flex-1 text-sm transition duration-300 hover:text-main-yellow text-left block w-full">
              ETKİNLİKLER
            </Link>
            <Link href="/" className="flex-1 text-sm transition duration-300 hover:text-main-yellow text-left block w-full">
              MÜZİKLER
            </Link>
            <Link href="/" className="flex-1 text-sm transition duration-300 hover:text-main-yellow text-left block w-full">
              VİDEOLAR
            </Link>
            <Link href="/" className="flex-1 text-sm transition duration-300 hover:text-main-yellow text-left block w-full">
              İLETİŞİM
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-tertiary-gray">© RAPKOLOGY All Rights Are Reserved 2022.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
