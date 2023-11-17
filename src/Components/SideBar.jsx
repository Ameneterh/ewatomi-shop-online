import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter } from "react-icons/io5";
import {
  MdOutlineMarkEmailUnread,
  MdAddIcCall,
  MdOutlineWhatsapp,
} from "react-icons/md";

export default function SideBar() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Hairs, Bags <IoLogoInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/beautyplace_by_ewa",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Perfumes <IoLogoInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/uniquescentsby_ewa",
    },
    {
      id: 3,
      child: (
        <>
          YouTube <IoLogoYoutube size={30} />
        </>
      ),
      href: "https://www.youtube.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter (X) <IoLogoTwitter size={30} />
        </>
      ),
      href: "https://www.twitter.com",
    },
    {
      id: 5,
      child: (
        <>
          Email Us <MdOutlineMarkEmailUnread size={30} />
        </>
      ),
      href: "mailto:ewatomiuniquebeautyplace@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="flex flex-col top-[25%] md:top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <Link
              to={href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
      {/* <IoLogoLinkedin className="cursor-pointer hover:scale-125 transition-all ease-in-out" /> */}
    </div>
  );
}
