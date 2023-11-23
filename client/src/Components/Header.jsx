import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [nav, setNav] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

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
  ];
  return (
    <div className="max-w-screen flex flex-col">
      <div className="flex items-center w-full justify-between border-b-[1px] mx-auto px-[5px] md:px-[40px] sticky top-0 text-black bg-white">
        <div className="w-[120px] h-[80px] text-white font-extrabold text-[60px] flex justify-center items-center">
          <Link to="/">
            <img
              src="/ewatomi_logo3.png"
              className="w-[120px] h-[60px] object-cover"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-12">
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
          {nav ? (
            <FaTimes size={30} className="text-white" />
          ) : (
            <FaBars size={30} />
          )}
        </div>

        {/* to show picture on login or just login if not logged in */}
        <div className="cursor-pointer">
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-12 w-12 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <p className="text-slate-700 hover:text-slate-500 hover:underline">
                Sign In
              </p>
            )}
          </Link>
        </div>

        {/* drop down navigation */}
        {nav && (
          <div className="flex flex-col justify-center items-center w-full absolute top-0 left-0 h-screen bg-gradient-to-b from-black via-black to-gray-200 opacity-90 gap-12 text-white font-bold">
            {menu.map((item) => (
              <div key={item.id} className="cursor-pointer text-3xl">
                <Link to={item.link} onClick={() => setNav(!nav)}>
                  <h2>{item.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* search bar in header */}
      <div className="w-full h-[60px] bg-[rgb(241, 245, 241)] py-2">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[50%] h-full p-3 mx-3 md:mx-auto flex items-center justify-center bg-white rounded-full"
        >
          <input
            type="text"
            placeholder="enter a search term ..."
            name="search"
            id="search"
            className="w-full h-full focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch size={20} className="text-slate-300" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
