import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderSearch from "./icons/HeaderSearch";

export default function Header() {
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
  return (
    <div className="min-h-20 fixed top-0 left-0 w-full z-30 backdrop-blur-md bg-main-black-op flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/header-logo.png" alt="Logo" width={235} height={60} />
          <nav className="ml-[96px] flex items-center gap-[30px]">
            {menuLinks?.map((menu) => (
              <Link href={menu?.id} className="font-saira text-[14px] transition duration-300 hover:text-main-yellow" key={menu?.id}>
                {menu?.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-center gap-8">
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
      </div>
    </div>
  );
}
