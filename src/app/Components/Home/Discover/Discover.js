"use client";
import React, { useState } from "react";
import DiscoverHeader from "./DiscoverHeader";
import DiscoverBlogs from "./DiscoverBlogs";
import DiscoverSidebar from "./DiscoverSidebar";

export default function Discover() {
  const [gridType, setGridType] = useState("ONE_GRID");

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
        <DiscoverHeader gridType={gridType} setGridType={setGridType} />
        <DiscoverBlogs gridType={gridType} blogs={blogs} />
      </div>
      <DiscoverSidebar categories={categories} />
    </div>
  );
}
