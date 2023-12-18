import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../Components/ListingItem";

export default function Home() {
  const [discountListing, setDiscountListing] = useState([]);
  const [giftListing, setGiftListing] = useState([]);
  SwiperCore.use(Navigation);

  useEffect(() => {
    const fetchDiscountListings = async () => {
      try {
        const res = await fetch("/api/listing/get?discount=true&limit=4");
        const data = await res.json();
        setDiscountListing(data);
        fetchGiftListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGiftListing = async () => {
      try {
        const res = await fetch("/api/listing/get?gift=true&limit=4");
        const data = await res.json();
        setGiftListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDiscountListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          beauty product with ease
        </h1>

        <div className="text-gray-400 text-xs sm:text-sm">
          <span className="font-bold text-slate-800">
            Ewatomi Unique Beauty Place
          </span>{" "}
          is the best place to find your next perfect beauty product.
          <br />
          We have a range of beauty products for you to choose from: hair,
          shoes, bags, perfumes, etc.
        </div>

        <Link
          to={"/search"}
          className="text-ex sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let's get started ...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {discountListing &&
          discountListing.length > 0 &&
          discountListing.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for discount, gifts */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {discountListing && discountListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent items with Discounts
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?discount=true"}
              >
                Show more discounts
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {discountListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {giftListing && giftListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Items with Gifts
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?giftt=true"}
              >
                Show more items with gifts
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {giftListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
