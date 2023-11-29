import React from "react";
import { FaPlaneArrival } from "react-icons/fa6";

export default function NewArrivals() {
  return (
    <div className="flex flex-col text-3xl text-center py-32 items-center h-screen w-full">
      <FaPlaneArrival className="text-9xl text-red-400" />
      Page Under Construction,
      <br />
      <span className="text-slate-500">It will be available Soon</span>
    </div>
  );
}
