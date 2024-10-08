import React from "react";
import { Link } from "react-router-dom";
import Title from "../Components/Title";
import contact_image from "/contact_us.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagramSquare, FaFacebookSquare, FaTiktok } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto p-3">
      <div className="text-center text-2xl pt-10">
        <Title text1={"contact"} text2={"us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={contact_image}
          alt=""
          className="w-full md:max-w-[480px] rounded-md"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-lg text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Magboro Ogun state <br /> Ojodu Berger Lagos state
          </p>
          <p className="text-gray-500">
            <Link
              to="tel:2348161238267"
              className="flex items-center hover:text-blue-600"
            >
              <BiSolidPhoneCall className="mr-1" />
              +234 816 123 8267
            </Link>
            <Link
              to="https://wa.me/2348161238267"
              className="flex items-center hover:text-blue-600"
            >
              <BsWhatsapp className="mr-1" /> +234 816 123 8267
            </Link>
            <Link
              to="https:mailto:ewatomiuniquebeautyplace@gmail.com"
              className="flex items-center hover:text-blue-600"
            >
              <MdAlternateEmail className="mr-1" />
              ewatomiuniquebeautyplace@gmail.com
            </Link>

            {/* social media contacts */}
            <div className="mt-2 text-xl flex items-center gap-2">
              <Link
                to="https:/wwww.instagram.com"
                className="hover:scale-125 transition-all duration-500 hover: opacity-95"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                to="https:/wwww.facebook.com"
                className="hover:scale-125 transition-all duration-500 hover: opacity-95"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                to="https:/wwww.tiktok.com"
                className="hover:scale-125 transition-all duration-500 hover: opacity-95"
              >
                <FaTiktok />
              </Link>
            </div>
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Opportunities for Vendors
          </p>
          <p className="text-gray-500">
            Learn more about opportunities on offer.
          </p>
          <button className="border border-black rounded-lg px-8 py-4 text-sm hover:bg-black hover:border-white hover:shadow-md hover:text-white transition-all duration-500">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
