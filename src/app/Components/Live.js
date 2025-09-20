import React from "react";

export default function Live() {
  return (
    <div className="relative pb-[300px]">
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col gap-3">
          <div className="flex items-center">
            <img src="/images/twitch-logo.png" alt="" />
            <div className="-rotate-5 border-l border-l-secondary-gray pl-10">
              <h2 className="text-6xl font-bold font-saira-condensed">
                HER HAFTA <br />
                <span className="text-main-yellow">CANLIDAYIZ!</span> <br />
              </h2>
              <p className="font-bold text-base mt-2">Bizi Takip Edin!</p>
            </div>
          </div>
          <img src="/images/takip-et.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between absolute w-[80%] top-20 left-1/2 transform -translate-x-1/2  z-50">
        <img src="/images/rapper-1.png" alt="" />
        <img src="/images/rapper-2.png" alt="" />
      </div>
      <div className="absolute top-55 w-full">
        <div className=" w-full h-full absolute top-0 left-0"></div>
        <img src="/images/live-bg.png" className="w-full z-[2]" alt="" />
        <img src="/images/live-bg-texture.png" className="w-full absolute bottom-0" alt="" />
      </div>
    </div>
  );
}
