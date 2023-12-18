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
    // {
    //   id: 2,
    //   name: "SHOP",
    //   link: "/shop",
    // },
    {
      id: 3,
      name: "NEW ARRIVALS",
      link: "/new-arrivals",
    },
    {
      id: 4,
      name: "THE BRAND",
      link: "/the-brand",
    },
  ];
  return (
    <div className="max-w-full flex flex-col sm:sticky top-0 z-10">
      <div className="flex items-center w-full justify-between border-b-[1px] mx-auto px-[5px] md:px-[40px] sticky top-0 text-black bg-white">
        <div className="w-[300px] h-[90px] flex items-center">
          <Link to="/" className="w-[100px]">
            <img src="/ewatomi_logo1.png" className="object-cover" />
          </Link>
          <div className="hidden md:flex flex-col uppercase w-[200px]">
            <span className="text-4xl font-extrabold text-red-700 w-full">
              ewatomi
            </span>
            <span className="text-md text-red-300 font-bold">
              unique beauty place
            </span>
          </div>
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
        <div className="hidden md:inline cursor-pointer">
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
          <div className="flex flex-col justify-center items-center w-[70%] absolute top-0 left-0 h-[500px] rounded-b-xl bg-gray-500 opacity-95 gap-8 text-white font-bold">
            <div className="flex flex-col items-center cursor-pointer px-7 py-2 rounded-lg">
              <Link to="/profile" onClick={() => setNav(!nav)}>
                {currentUser ? (
                  <img
                    className="rounded-full h-[80px] w-[80px] object-cover"
                    src={currentUser.avatar}
                    alt="profile"
                  />
                ) : (
                  <p className="text-white hover:text-slate-500 hover:underline">
                    Sign In
                  </p>
                )}
              </Link>
            </div>

            {menu.map((item) => (
              <div key={item.id} className="cursor-pointer text-2xl">
                <Link to={item.link} onClick={() => setNav(!nav)}>
                  <h2>{item.name}</h2>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* search bar in header */}
      <div className="w-full h-[60px] bg-gray-100 py-2 border-b-2 shadow-md">
        <form
          onSubmit={handleSubmit}
          className="w-[95%] sm:w-[50%] h-full p-3 mx-3 md:mx-auto flex items-center justify-center bg-white rounded-full"
        >
          <input
            type="text"
            placeholder="enter a search term ..."
            name="search"
            id="search"
            className="w-full h-full focus:outline-none"
            value={searchTerm}
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
