import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../Components/ListingItem";
import HeroComponent from "../Components/HeroComponent";
import LatestCollections from "../Components/LatestCollections";
import Divider from "../Components/Divider";

export default function Home() {
  const [discountListing, setDiscountListing] = useState([]);
  const [giftListing, setGiftListing] = useState([]);
  SwiperCore.use(Navigation);

  useEffect(() => {
    const fetchGiftListing = async () => {
      try {
        const res = await fetch("/api/listing/get?gift=true");
        const data = await res.json();
        setGiftListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDiscountListings = async () => {
      try {
        const res = await fetch("/api/listing/get?discount=true");
        const data = await res.json();
        setDiscountListing(data);
        fetchGiftListing();
      } catch (error) {
        console.log(error);
      }
    };

    fetchDiscountListings();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-3">
      <HeroComponent />
      <LatestCollections />
      <Divider />

      {/* swiper */}
      {/* <Swiper navigation>
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
      </Swiper> */}

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

        <Divider />

        {giftListing && giftListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Items with Gifts
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?gift=true"}
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
