import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className=" flex items-center gap-2">
            <label className="whitespace-nowrap">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search ..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Category: </label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>All Categories</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="perfumes" className="w-5" />
              <span>Perfumes</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="hair" className="w-5" />
              <span>Hair</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="bags" className="w-5" />
              <span>Bags</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="others" className="w-5" />
              <span>Others</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Discount/Gifts: </label>
            <div className="flex gap-2">
              <input type="checkbox" id="discount" className="w-5" />
              <span>Discount</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="gift" className="w-5" />
              <span>Gift</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select id="sort_order" className="border rounded-lg p-3">
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b-3 p-3 text-slate-700 mt-5">
          Listing Results:
        </h1>
      </div>
    </div>
  );
}