import Link from "next/link";
import React from "react";

export default function CustomButton({ href = "/", variant = "primary", text = "Devamını Oku" }) {
  const clip = "polygon(0% 0%, 100% 0%, 93% 100%, 7% 100%)";

  const variantType = () => {
    if (variant === "primary") {
      return `bg-main-yellow text-black`;
    } else if (variant === "white") {
      return `bg-foreground text-black`;
    } else if (variant === "black") {
      return `bg-background text-white`;
    }
  };

  return (
    <div className="relative inline-block group">
      <div
        className="absolute inset-0  bg-black transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200 "
        style={{ clipPath: clip }}
        aria-hidden="true"
      />

      <Link
        href={href}
        className={`relative block font-extrabold px-8 py-3 text-lg transition-all duration-200 cursor-pointer ${variantType()}`}
        style={{ clipPath: clip }}
        aria-label={text}
      >
        <span className="inline-block select-none">{text}</span>
      </Link>
    </div>
  );
}
