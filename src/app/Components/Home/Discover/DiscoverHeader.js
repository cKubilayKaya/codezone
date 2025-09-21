import useWindowWidth from "@/app/customHooks/useWindowWidth";
import BarDot from "@/app/icons/BarDot";
import BarStraight from "@/app/icons/BarStraight";
import CompassIcon from "@/app/icons/CompassIcon";
import SearchIcon from "@/app/icons/SearchIcon";
import React, { useState } from "react";

export default function DiscoverHeader({ gridType, setGridType }) {
  const width = useWindowWidth();

  return (
    <div className="flex items-center justify-between mb-20">
      <div className="flex items-center gap-5">
        <h2 className="font-saira-condensed font-bold text-4xl md:text-6xl">KEŞFET</h2>
        <CompassIcon size={width < 768 ? "36" : "55"} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="cursor-pointer">
          <SearchIcon />
        </button>
        <button className="cursor-pointer" onClick={() => setGridType("ONE_GRID")}>
          <BarStraight color={gridType === "ONE_GRID" ? "rgba(240, 231, 77, 1)" : "white"} />
        </button>
        <button className="cursor-pointer" onClick={() => setGridType("TWO_GRID")}>
          <BarDot color={gridType === "TWO_GRID" ? "rgba(240, 231, 77, 1)" : "white"} />
        </button>
      </div>
    </div>
  );
}
