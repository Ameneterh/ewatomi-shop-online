import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter } from "react-icons/io5";
import {
  MdOutlineMarkEmailUnread,
  MdAddIcCall,
  MdOutlineWhatsapp,
} from "react-icons/md";

export default function Contact({ listing }) {
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setVendor(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVendor();
  }, [listing.userRef]);

  return (
    <div>
      {vendor && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{vendor.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <ul className="flex items-center justify-between flex-wrap w-full text-white mb-3 gap-3">
            <li className="flex items-center justify-center w-36 h-10 px-4  duration-300 bg-gray-500 rounded-lg hover:opacity-80">
              <Link
                to="https://wa.me/2348161238267"
                target="_blank"
                className="flex items-center gap-2"
              >
                <MdOutlineWhatsapp size={30} /> WhatsApp
              </Link>
            </li>
            <li className="flex items-center justify-center w-36 h-10 px-4  duration-300 bg-gray-500 rounded-lg hover:opacity-80">
              <Link
                to={`mailto:ewatomiuniquebeautyplace@gmail.com?subject=Regarding ${listing.name}`}
                className="flex items-center gap-2"
              >
                <MdOutlineMarkEmailUnread size={30} /> Email
              </Link>
            </li>
            <li className="flex items-center justify-center w-36 h-10 px-4  duration-300 bg-gray-500 rounded-lg hover:opacity-80">
              <Link to="tel:+2348161238267" className="flex items-center gap-2">
                <MdAddIcCall size={30} /> Call
              </Link>
            </li>
            {listing.category === "perfumes" ? (
              <li className="flex items-center justify-center w-36 h-10 px-4  duration-300 bg-gray-500 rounded-lg hover:opacity-80">
                <Link
                  to="https://www.instagram.com/uniquescentsby_ewa"
                  className="flex items-center gap-2"
                >
                  <IoLogoInstagram size={30} /> Instagram
                </Link>
              </li>
            ) : (
              <li className="flex items-center justify-center w-36 h-10 px-4  duration-300 bg-gray-500 rounded-lg hover:opacity-80">
                <Link
                  to="https://www.instagram.com/beautyplace_by_ewa"
                  className="flex items-center gap-2"
                >
                  <IoLogoInstagram size={30} /> Instagram
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
      {/* className="flex flex-col top-[25%] md:top-[35%] left-0 fixed z-10" */}
    </div>
  );
}
