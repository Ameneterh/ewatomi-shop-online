import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex mt-4 md:mt-16 justify-center p-4">
      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-4">
        <h1 className="text-6xl font-extrabold text-red-400">404</h1>
        <div className="absolute top-0 h-16 w-16 border-4 rounded-full border-red-600 border-r-transparent animate-spin opacity-50"></div>
        <p className="text-xl font-bold">We're working on it!</p>
        <img src="/not_found.png" className="h-44" />

        <Link
          to={"/"}
          className="flex items-center bg-green-700 px-8 py-3 text-sm font-medium text-white hover:bg-green-500 active:bg-blue-600 rounded-md"
        >
          <RiArrowGoBackFill className="h-4 w-6" />
          GO HOME
        </Link>
      </div>
    </div>
  );
}
