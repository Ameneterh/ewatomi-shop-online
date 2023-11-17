import React from "react";
import {
  MdOutlineMarkEmailUnread,
  MdAddIcCall,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="box-border items-center h-auto md:ml-[90px] flex flex-col text-slate-600 bg-slate-50">
      <form className="w-full md:w-[500px] flex flex-col gap-4 px-6">
        <h2 className="font-bold text-[36px] mt-5">Contact Us</h2>
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
      <div className="w-full md:w-[800px] flex flex-col gap-4 mt-6 px-6">
        <h2 className="text-[20px] font-bold mt-5">Get in touch:</h2>
        <div className="w-full flex justify-between flex-wrap gap-4 mt-3 mb-10">
          <ContactComponent
            title="Call Us: +2348161238267"
            desc="Wait time: less than 1 minute"
            component={<MdAddIcCall />}
            URL=""
          />
          <ContactComponent
            title="Chat With Us: +2348161238267"
            desc="Wait time: 5 minutes"
            component={<MdOutlineWhatsapp />}
            URL="https://wa.me/2348161238267"
          />
          <ContactComponent
            title="Email Us"
            desc="Wait time: 30-60 minutes"
            component={<MdOutlineMarkEmailUnread />}
            URL=""
          />
        </div>
      </div>
    </div>
  );
}

const ContactComponent = (props) => {
  return (
    <div className="w-full md:w-[350px] h-[60px] border-2 rounded-full p-2 flex items-center justify-between text-center gap-2 shadow-inner hover:shadow-lg">
      <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[30px]">
        {props.component}
      </div>
      <div>
        <p className="text-[15px] font-extrabold">{props.title}</p>
        <p className="text-[14px]">{props.desc}</p>
      </div>
      <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[30px] text-green-600">
        <Link to={props.URL} target="_blank">
          <PiArrowFatLinesRightFill className="hover:scale-125 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};
