import React from "react";

export default function Home() {
  // let scrollbarWidth = window.innerWidth - document.body.clientWidth + "px";
  return (
    <div
      name="home"
      className="h-screen w-full scroll-m-0 bg-gray-100 box-border"
    >
      <div className="items-center h-full mx-auto flex flex-col md:flex-row shrink justify-around scroll-m-0 bg-[#FDCC4B]">
        <img src="/new-arrival-2.png" className="h-full" />
        <div className="flex flex-col justify-start items-center h-full w-full text-center">
          <div className="hidden md:inline-block h-[120px] border-r-[2px]"></div>
          <div className="hidden md:inline-block h-[10px] w-[10px] bg-red-400 rounded-full mb-[44px]"></div>
          <h2 className="uppercase mt-[16px] text-[20px] font-semibold text-white">
            new christmas collection 2023
          </h2>
          <h2 className="uppercase text-[60px] md:text-[80px] font-bold text-white">
            arrival sales
          </h2>
          <button className="uppercase bg-black text-white font-bold hover:scale-110 hover:opacity-90 transition-all ease-in-out rounded-lg w-[150px] h-12 mb-[16px]">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
}
