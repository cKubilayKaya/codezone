import React from "react";
import ArrowRightIcon2 from "../icons/ArrowRightIcon2";
import Link from "next/link";

export default function Breadcrumb({ breadcrumbData, variant = "primary" }) {
  return (
    <div
      className={`flex items-center gap-2 sm:gap-3 md:gap-5 ${
        variant === "primary" ? "text-main-black" : "text-main-white"
      } text-xs sm:text-sm overflow-x-auto scrollbar-hide`}
    >
      {breadcrumbData?.map((item, index) =>
        item?.href ? (
          <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-5 whitespace-nowrap">
            <Link
              href={item?.href}
              className="uppercase hover:text-main-yellow transition-colors duration-200 truncate max-w-[80px] sm:max-w-[120px] md:max-w-none"
              title={item?.label}
            >
              {item?.label}
            </Link>
            <span className="uppercase flex-shrink-0">
              <ArrowRightIcon2 color={variant === "primary" ? "rgba(30, 30, 30, 1)" : "white"} className="w-3 h-3 sm:w-4 sm:h-4" />
            </span>
          </div>
        ) : (
          <span key={index} className="uppercase truncate w-full md:max-w-none whitespace-nowrap" title={item?.label}>
            {item?.label}
          </span>
        )
      )}
    </div>
  );
}
