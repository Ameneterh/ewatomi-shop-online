import React from "react";
import { Link } from "react-router-dom";

export default function UploadProduct() {
  return (
    <div className="box-border items-center h-auto flex flex-col text-slate-600 bg-slate-50">
      <form className="w-full md:w-[500px] flex flex-col gap-4 px-6">
        <h2 className="font-bold text-[36px] mt-5">Product Upload</h2>
        <input
          type="text"
          name="full-name"
          id="full-name"
          placeholder="enter your full name"
          className="w-full h-10 rounded-lg px-2 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          className="w-full h-10 rounded-lg px-2 focus:outline-none"
        />
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 rounded-lg focus:outline-none"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button className="uppercase bg-slate-800 text-white w-full h-10 rounded-lg px-2 hover:opacity-95">
          submit
        </button>
      </form>
    </div>
  );
}
