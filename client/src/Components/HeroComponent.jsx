import React from "react";
import { Link } from "react-router-dom";
import heroimage from "/heroimage.png";

export default function HeroComponent() {
  return (
    <div className="flex flex-col-reverse md:flex-row pt-8 mb-8 max-w-6xl mx-auto items-center justify-center border-b-2">
      <div className="flex flex-col w-full lg:w-1/2 gap-6">
        <h1 className="text-slate-700 font-bold text-3xl sm:text-6xl">
          Find your next <span className="text-slate-500">perfect </span>
          beauty product with ease
        </h1>

        <div className="text-gray-400 text-xs sm:text-sm">
          <span className="font-bold text-slate-800">
            Ewatomi Unique Beauty Place
          </span>{" "}
          is the best place to find your next perfect beauty product. We have a
          range of beauty products for you to choose from: hair, shoes, bags,
          perfumes, etc.
        </div>

        <Link
          to={"/search"}
          className="text-ex sm:text-sm text-blue-800 font-bold hover:underline mb-8"
        >
          Let's get started ...
        </Link>
      </div>
      <div
        className="h-96 sm:h-[500px] w-full lg:w-1/2"
        style={{
          backgroundImage: `url(${heroimage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
