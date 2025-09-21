import React from "react";
import ArrowRightIcon2 from "../icons/ArrowRightIcon2";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbData }) {
  return (
    <div className="container mx-auto flex items-center gap-5 text-main-black text-sm">
      {breadcrumbData?.map((item, index) =>
        item?.href ? (
          <div key={index} className="flex items-center gap-5">
            <Link href="/">{item?.label}</Link>
            <span>
              <ArrowRightIcon2 />
            </span>
          </div>
        ) : (
          <span key={index}>{item?.label}</span>
        )
      )}
    </div>
  );
}
