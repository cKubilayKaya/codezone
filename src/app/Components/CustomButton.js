import React from "react";

export default function CustomButton() {
  const clip = "polygon(0% 0%, 100% 0%, 93% 100%, 7% 100%)";

  return (
    <div className="relative inline-block group">
      <div
        className="absolute inset-0  bg-black transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200 "
        style={{ clipPath: clip }}
        aria-hidden="true"
      />

      <button
        className="relative bg-[#f2df48] text-black font-extrabold px-8 py-3 text-lg transition-all duration-200 "
        style={{ clipPath: clip }}
        aria-label="Devamını Oku"
      >
        <span className="inline-block select-none">Devamını Oku</span>
      </button>
    </div>
  );
}
