"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import EyeIcon from "@/app/icons/EyeIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import CommentIcon from "@/app/icons/CommentIcon";
import Link from "next/link";
import Trends from "../../Home/Trends";

export default function BlogDetailContent({ breadcrumbData, blog, allBlogs }) {
  const [randomBlogs, setRandomBlogs] = useState([]);

  function getRandomBlogs(blogs, count = 3) {
    const shuffled = [...blogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    if (allBlogs?.length) {
      setRandomBlogs(getRandomBlogs(allBlogs, 3));
    }
  }, [allBlogs]);

  return (
    <div>
      <Breadcrumb breadcrumbData={breadcrumbData} variant="secondary" />

      <div className="my-12 flex items-center gap-2">
        <EyeIcon />
        <p>{blog?.attributes?.view}</p>
      </div>

      <h2 className="font-saira-condensed font-bold text-5xl md:text-6xl mb-8 uppercase">{blog?.attributes?.title}</h2>

      <div dangerouslySetInnerHTML={{ __html: blog?.attributes?.content }} />

      <div className="flex items-center gap-[10px] my-8">
        {blog?.attributes?.tags?.map((item) => (
          <button className="bg-quaternary-gray p-[10px]" key={item}>
            {item}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-8 mb-16">
        <div className="flex items-center gap-2">
          <HeartIcon />
          <p>{blog?.attributes?.likes} Kişi Beğendi</p>
        </div>
        <div className="flex items-center gap-2">
          <CommentIcon />
          <p>{blog?.attributes?.comments}</p>
        </div>
      </div>

      <div>
        <h2 className="font-bold font-saira-condensed text-4xl md:text-6xl mb-16">DAHA FAZLA İÇERİK</h2>
        <div className="flex flex-col gap-8">
          {randomBlogs?.map((item) => (
            <div key={item?.attributes?.slug} className="flex items-center gap-5 group w-full border-b border-b-secondary-gray pb-8 last:border-b-0">
              <img src={item?.attributes?.img} className="w-[88px] h-[77px] object-cover" alt={item?.attributes?.title} />
              <Link
                href={`/blogs/${item?.attributes?.slug}`}
                className="block font-bold font-saira-condensed w-full text-[25px] uppercase hover:text-main-yellow"
              >
                {item?.attributes?.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Trends cols={2} />
    </div>
  );
}
