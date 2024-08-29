import React, { useState, useEffect } from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { HiViewGrid } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { HiCog } from "react-icons/hi2";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";

import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/userSlice";

function HeaderComponent() {
  const [visible, setVisible] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const dispatch = useDispatch();

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

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  return (
    <>
      <Navbar fluid className="md:px-14 py-4 sticky top-0 shadow-md z-50">
        <Navbar.Brand href="/" className="flex gap-1">
          <img
            src="/ewatomi_logo1.png"
            className="h-10 sm:h-12 lg:h-16 rounded-full"
            alt="site logo"
          />
          <span className="hidden lg:inline self-center whitespace-nowrap text-3xl font-extrabold dark:text-white">
            EWATOMI
            <span className="text-red-400 block text-sm">
              Unique Beauty Place
            </span>
          </span>
        </Navbar.Brand>

        {/* drop down */}
        <div className="flex gap-3 items-center md:order-2">
          {/* search bbutton */}
          <Button
            onClick={() => setVisible(true)}
            as="div"
            className="h-10 w-10 p-3 bg-slate-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-100"
          >
            <GrSearch className="text-2xl text-black font-bold" />
          </Button>

          {/* currentuser profile */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
                  rounded
                  className="bg-gray-200 rounded-full"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">User One</span>
                <span className="block truncate text-sm font-medium">
                  user1@company.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={CgProfile}>Profile</Dropdown.Item>
              <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
              <Dropdown.Item icon={HiCog}>Add Listing</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item icon={FaSignOutAlt} onClick={handleSignOut}>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <div>
              <p className="text-slate-700 hover:text-slate-500 hover:underline">
                <Link to="/signin">Sign In</Link>
              </p>
            </div>
          )}
          <div className="h-8 w-8 rounded-full flex items-center justify-center relative cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            <div className="bg-red-600 text-white h-4 w-4 text-xs rounded-full flex items-center justify-center absolute -top-1 -right-1 p-1">
              5
            </div>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as="div">
            <Link to="/">HOME</Link>
            {path === "/" ? (
              <hr className="border-[1px] border-cyan-700" />
            ) : (
              <></>
            )}
          </Navbar.Link>
          <Navbar.Link active={path === "/collection"} as="div">
            <Link to="/collection">COLLECTION</Link>
            {path === "/collection" ? (
              <hr className="border-[1px] border-cyan-700" />
            ) : (
              <></>
            )}
          </Navbar.Link>
          <Navbar.Link active={path === "/the-brand"} as="div">
            <Link to="/the-brand">ABOUT</Link>
            {path === "/the-brand" ? (
              <hr className="border-[1px] border-cyan-700" />
            ) : (
              <></>
            )}
          </Navbar.Link>

          <Navbar.Link active={path === "/contact"} as="div">
            <Link to="/contact">CONTACT</Link>
            {path === "/contact" ? (
              <hr className="border-[1px] border-cyan-700" />
            ) : (
              <></>
            )}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div
        className={`w-full bg-slate-500 p-2 transition-all ${
          visible === true ? "block" : "hidden"
        }`}
      >
        <div className="max-w-4xl mx-auto text-sm text-slate-500 flex items-center rounded-full focus-within:shadow-md">
          <input
            placeholder="enter search term ..."
            className="flex-1 border h-9 rounded-l-full focus:outline-none p-2"
          />
          <div className="bg-red-600 hover:bg-red-700 w-10 h-9 rounded-r-full flex items-center justify-center cursor-pointer">
            <GrSearch className="text-xl text-white font-bold" />
          </div>
          <Button
            onClick={() => setVisible(false)}
            as="div"
            className="cursor-pointer w-10 rounded-full h-10 flex items-center justify-center bg-transparent"
          >
            <AiFillCloseCircle className="text-3xl text-red-400 hover:scale-125 hover:text-red-600 transition-all" />
          </Button>
        </div>
      </div>
    </>
    // <div className="max-w-full flex flex-col sm:sticky top-0 z-50 relative">
    //   <div className="flex items-center w-full justify-between border-b-[1px] mx-auto px-[5px] md:px-[40px] sticky top-0 text-black bg-white">
    //     <div className="w-[300px] h-[90px] flex items-center">
    //       <Link to="/" className="w-[100px]">
    //         <img src="/ewatomi_logo1.png" className="object-cover" />
    //       </Link>
    //       <div className="hidden md:flex flex-col uppercase w-[200px]">
    //         <span className="text-4xl font-extrabold text-red-700 w-full">
    //           ewatomi
    //         </span>
    //         <span className="text-md text-red-300 font-bold">
    //           unique beauty place
    //         </span>
    //       </div>
    //     </div>
    //     <div className="hidden md:flex gap-12">
    //       {menu.map((item) => (
    //         <div
    //           key={item.id}
    //           className="cursor-pointer hover:underline decoration-[2px] hover:underline-offset-[16px] font-medium"
    //         >
    //           <Link to={item.link}>
    //             <h2>{item.name}</h2>
    //           </Link>
    //         </div>
    //       ))}
    //     </div>

    //     <div
    //       onClick={() => setNav(!nav)}
    //       className="w-[90px] h-[90px] z-40 flex justify-center items-center cursor-pointer md:hidden"
    //     >
    //       {nav ? (
    //         <FaTimes size={30} className="text-white" />
    //       ) : (
    //         <FaBars size={30} />
    //       )}
    //     </div>

    //     {/* to show picture on login or just login if not logged in */}
    //     <div className="hidden md:inline cursor-pointer">
    //       <Link to="/profile">
    //         {currentUser ? (
    //           <img
    //             className="rounded-full h-12 w-12 object-cover"
    //             src={currentUser.avatar}
    //             alt="profile"
    //           />
    //         ) : (
    //           <p className="text-slate-700 hover:text-slate-500 hover:underline">
    //             Sign In
    //           </p>
    //         )}
    //       </Link>
    //     </div>

    //     {/* drop down navigation */}
    //     {nav && (
    //       <div className="flex flex-col justify-center items-center w-[70%] absolute top-0 right-0 h-[500px] rounded-b-xl bg-gray-500 opacity-95 gap-8 text-white font-bold z-30">
    //         <div className="flex flex-col items-center cursor-pointer px-7 py-2 rounded-lg">
    //           <Link to="/profile" onClick={() => setNav(!nav)}>
    //             {currentUser ? (
    //               <img
    //                 className="rounded-full h-[80px] w-[80px] object-cover"
    //                 src={currentUser.avatar}
    //                 alt="profile"
    //               />
    //             ) : (
    //               <p className="text-white hover:text-slate-500 hover:underline">
    //                 Sign In
    //               </p>
    //             )}
    //           </Link>
    //         </div>

    //         {menu.map((item) => (
    //           <div key={item.id} className="cursor-pointer text-2xl">
    //             <Link to={item.link} onClick={() => setNav(!nav)}>
    //               <h2>{item.name}</h2>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     )}
    //   </div>

    //   {/* search bar in header */}
    //   <div className="w-full h-[60px] bg-gray-100 py-2 border-b-2 shadow-md">
    //     <form
    //       onSubmit={handleSubmit}
    //       className="w-[95%] sm:w-[50%] h-full p-3 mx-3 md:mx-auto flex items-center justify-center bg-white rounded-full"
    //     >
    //       <input
    //         type="text"
    //         placeholder="enter a search term ..."
    //         name="search"
    //         id="search"
    //         className="w-full h-full focus:outline-none"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //       <button>
    //         <FaSearch size={20} className="text-slate-300" />
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default HeaderComponent;
