import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaShare } from "react-icons/fa";
import { TbCategoryPlus, TbCurrencyNaira } from "react-icons/tb";
import Contact from "../Components/Contact";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser._id);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);
  // console.log(listing);

  return (
    <main className="">
      {loading && <p className="text-center my-7 text-2xl">Loading ...</p>}

      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}

      {listing && !loading && !error && (
        <div className="z-0">
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[450px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[21%] sm:top-[25%] right-[3%] border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
              }}
            />
          </div>
          {copied &&
            setTimeout(() => {
              setCopied(false);
            }, 2000) && (
              <p className="fixed top-[28%] right-[7%] z-10 rounded-md bg-slate-100 p-2">
                Link copied!
              </p>
            )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-6">
            <p className="flex items-center text-2xl font-semibold">
              {listing.name} - <TbCurrencyNaira />{" "}
              {listing.discount
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
            </p>
            <p className="flex items-center gap-1">
              <TbCategoryPlus className="text-green-800 font-semibold" />
              {listing.category}
            </p>
            <div className="flex gap-4">
              {listing.quantity > 0 ? (
                <p className="bg-red-800 w-full max-w-[200px] text-white text-center py-2 rounded-md">
                  In Stock
                </p>
              ) : (
                " "
              )}
              {listing.gift && (
                <p className="bg-blue-600 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  Free Gift Inside
                </p>
              )}
              {listing.discount && (
                <p className="flex items-center bg-green-900 w-full max-w-[200px] text-white justify-center p-1 rounded-md">
                  <TbCurrencyNaira />{" "}
                  {(
                    +listing.regularPrice - +listing.discountPrice
                  ).toLocaleString("en-US")}{" "}
                  discount
                </p>
              )}
            </div>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {listing.description}
            </p>

            {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact Vendor
              </button>
            )}
            {!currentUser && !contact && (
              <button
                onClick={() => setContact(true)}
                className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
              >
                Contact Vendor
              </button>
            )}
            {contact && <Contact listing={listing} />}
          </div>
        </div>
      )}
    </main>
  );
}
