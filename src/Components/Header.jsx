import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);

  const menu = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "THE BRAND",
      link: "/the-brand",
    },
    {
      id: 3,
      name: "SHOP",
      link: "/shop",
    },
    {
      id: 4,
      name: "CATALOGUE",
      link: "/catalogue",
    },
    {
      id: 5,
      name: "NEW ARRIVALS",
      link: "/new-arrivals",
    },
    {
      id: 6,
      name: "CONTACT US",
      link: "/contact-us",
    },
  ];
  return (
    <div className="box-border flex items-center w-screen justify-between border-b-[1px] mx-auto sticky top-0 text-black bg-white">
      <div className="w-[120px] h-[80px] text-white font-extrabold text-[60px] flex justify-center items-center">
        <img
          src="/ewatomi_logo3.png"
          className="w-[120px] h-[60px] object-cover"
        />
      </div>
      <div className="box-border hidden md:flex gap-12">
        {menu.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:underline decoration-[2px] hover:underline-offset-[16px] font-medium"
          >
            <Link to={item.link}>
              <h2>{item.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="w-[90px] h-[90px] z-10 flex justify-center items-center cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-screen bg-gradient-to-b from-red-700 to-red-200 opacity-90 gap-12 text-white font-extrabold">
          {menu.map((item) => (
            <div key={item.id} className="cursor-pointer text-3xl">
              <Link to={item.link}>
                <h2>{item.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
