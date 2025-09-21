import React from "react";
import ArrowRightIcon2 from "../icons/ArrowRightIcon2";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbData, variant = "primary" }) {
  return (
    <div className={`flex items-center gap-5 ${variant === "primary" ? "text-main-black" : "text-main-white"} text-sm`}>
      {breadcrumbData?.map((item, index) =>
        item?.href ? (
          <div key={index} className="flex items-center gap-5">
            <Link href={item?.href} className="uppercase hover:text-main-yellow">
              {item?.label}
            </Link>
            <span className="uppercase">
              <ArrowRightIcon2 color={variant === "primary" ? "rgba(30, 30, 30, 1)" : "white"} />
            </span>
          </div>
        ) : (
          <span key={index} className="uppercase">
            {item?.label}
          </span>
        )
      )}
    </div>
  );
}
