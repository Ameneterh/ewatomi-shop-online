import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Button } from "flowbite-react";
import { GrSearch } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-1 my-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search ..."
          className="flex-1 border-none active:border-slate-50 bg-inherit text-sm"
        />
        <GrSearch className="text-xl text-slate-500 font-bold" />
      </div>
      <AiFillCloseCircle
        onClick={() => setShowSearch(false)}
        className="inline cursor-pointer text-3xl text-red-400 hover:scale-125 hover:text-red-600 transition-all"
      />
    </div>
  ) : null;
}
