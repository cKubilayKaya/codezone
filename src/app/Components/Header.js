"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../icons/MenuIcon";
import useWindowWidth from "../customHooks/useWindowWidth";
import CloseIcon from "../icons/CloseIcon";
import HeaderSearch from "../icons/HeaderSearch";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const width = useWindowWidth();

  const menuLinks = [
    {
      id: "haberler",
      title: "HABERLER",
    },
    {
      id: "etkinlikler",
      title: "ETKİNLİKLER",
    },
    {
      id: "muzikler",
      title: "MüZiKLER",
    },
    {
      id: "videolar",
      title: "ViDEOLAR",
    },
    {
      id: "iletisim",
      title: "iLETiŞiM",
    },
  ];

  const MenuRightBar = ({ hidden = true }) => (
    <div className={`${hidden ? "hidden lg:flex justify-center" : "flex"}  items-center justify-between gap-4 xl:gap-8`}>
      <button className="cursor-pointer">
        <HeaderSearch />
      </button>
      <Link
        href="/giris-yap"
        className="font-bold w-[120px] h-[40px] bg-white flex items-center justify-center text-black transition duration-300 hover:bg-main-yellow"
      >
        GİRİŞ YAP
      </Link>
    </div>
  );

  useEffect(() => {
    if (width > 1024) {
      setMenuActive(false);
    }
  }, [width]);

  return (
    <div
      className={`${
        menuActive && "min-h-[400px]"
      } lg:min-h-[80px] fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-main-black-op flex items-center justify-center`}
    >
      <div className="min-h-[80px] container flex items-center justify-between mb-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/header-logo.png" alt="Logo" width={235} height={60} />
          </Link>
          <nav className="ml-[24px] xl:ml-[96px] items-center gap-[30px] hidden lg:flex">
            {menuLinks?.map((menu) => (
              <Link href={menu?.id} className="font-saira text-[14px] transition duration-300 hover:text-main-yellow" key={menu?.id}>
                {menu?.title}
              </Link>
            ))}
          </nav>
        </div>
        {<MenuRightBar />}
      </div>
      <div className={`mb-auto ${menuActive ? "mt-[25px]" : "mt-[33px]"} pr-3`}>
        <button className="cursor-pointer block lg:hidden" onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? <CloseIcon size="32px" color="rgba(240, 231, 77, 1)" /> : <MenuIcon />}
        </button>
        <div className={`absolute top-[80px] left-0 w-full py-4 ${menuActive ? "block lg:hidden" : "hidden"} `}>
          <div className="container mx-auto w-full">
            <div className="flex flex-col mb-8">
              {menuLinks?.map((menu) => (
                <Link href={menu?.id} className="font-saira py-2 transition duration-300 hover:text-main-yellow" key={menu?.id}>
                  {menu?.title}
                </Link>
              ))}
            </div>
            {<MenuRightBar hidden={false} />}
          </div>
        </div>
      </div>
    </div>
  );
}
