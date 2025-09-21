import React from "react";

export default function Live() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="flex items-center justify-center z-50 relative px-4">
        <div className="flex items-center flex-col gap-2 md:gap-3">
          <div className="flex items-center flex-col sm:flex-row">
            <img src="/images/twitch-logo.png" alt="" className="w-40 sm:w-40 md:w-auto h-auto mb-2 sm:mb-0" />
            <div className="-rotate-2 sm:-rotate-5 border-l-0 sm:border-l border-l-secondary-gray pl-0 sm:pl-6 md:pl-10 text-center sm:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light font-saira-condensed leading-8 md:leading-12">
                HER HAFTA <br />
                <span className="text-main-yellow font-bold">CANLIDAYIZ!</span> <br />
              </h2>
              <p className="font-bold text-sm sm:text-base mt-1 md:mt-2">Bizi Takip Edin!</p>
            </div>
          </div>
          <img src="/images/takip-et.png" alt="" className="w-50 sm:w-50 md:w-auto h-auto max-w-full" />
        </div>
      </div>
      <div className="flex items-end justify-between absolute w-[100%] md:w-[90%] bottom-0 md:bottom-0 lg:bottom-0 top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center justify-between w-full">
          <img src="/images/rapper-1.png" alt="" className="w-[190px] sm:w-[220px] md:w-[280px] lg:w-[300px] xl:w-auto h-auto" />
          <img src="/images/rapper-2.png" alt="" className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-auto h-auto" />
        </div>
      </div>
      <div className="absolute w-full inset-0">
        <div className="w-full h-full absolute top-0 left-0"></div>
        <img src="/images/live-bg.png" className="absolute inset-0 w-full h-full object-cover z-[2]" alt="" />
        <img src="/images/live-bg-texture.png" className="absolute inset-x-0 bottom-0 w-full z-[30]" alt="" />
      </div>
    </div>
  );
}
