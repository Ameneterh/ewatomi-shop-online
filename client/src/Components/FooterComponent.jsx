import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="w-full border-t-4 border-t-slate-800 bg-slate-50"
    >
      <div className="w-full flex flex-col text-center items-center justify-center">
        <div className="w-full justify-center lg:justify-between sm:flex items-center gap-4">
          <div className="flex w-full lg:w-56 items-center justify-center">
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
          </div>
          <Footer.LinkGroup className="flex flex-wrap items-center justify-center gap-3 mb-3 text-slate-950">
            <Footer.Link as="div" className="hover:text-blue-500">
              <Link to="/">Home</Link>
            </Footer.Link>
            <Footer.Link as="div" className="hover:text-blue-500">
              <Link to="/collection">Collection</Link>
            </Footer.Link>
            <Footer.Link as="div" className="hover:text-blue-500">
              <Link to="/the-brand">About</Link>
            </Footer.Link>
            <Footer.Link as="div" className="hover:text-blue-500">
              <Link to="/contact">Contact</Link>
            </Footer.Link>
          </Footer.LinkGroup>
          <div className="h-10 flex items-center justify-between rounded-full focus-within:shadow-md ">
            <input
              //   type="email"
              placeholder="your email"
              className="text-sm flex-1 rounded-l-full w-[150px] lg:w-[250px] border focus:outline-none h-10 p-2 bg-white focus:bg-white"
            />
            <button className="-ml-1 h-10 rounded-r-full bg-red-600 hover:bg-red-700 text-white font-bold px-3">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ewatomi Unique Beauty Place"
            year={new Date().getFullYear()}
            className="text-slate-950"
          />
          <div className="mt-4 flex flex-col lg:flex-row gap-2 sm:mt-0 items-center justify-center">
            <p className="text-sm">
              Designed & Maintained by:{" "}
              <span className="font-bold block lg:inline-block">
                AMENE Ter'Hemen
              </span>
            </p>
            <div className="flex gap-4 sm:mt-0 justify-center">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="text-slate-700 hover:text-blue-500"
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
                className="text-slate-700 hover:text-blue-500"
              />
              <Footer.Icon
                href="#"
                icon={BsTwitter}
                className="text-slate-700 hover:text-blue-500"
              />
              <Footer.Icon
                href="#"
                icon={BsGithub}
                className="text-slate-700 hover:text-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
