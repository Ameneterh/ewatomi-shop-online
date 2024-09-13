import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "./ListingItem";
import { ShopContext } from "../Context/ShopContext";

export default function LatestCollections() {
  const { products } = useContext(ShopContext);

  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchGiftListing = async () => {
      try {
        const res = await fetch("/api/listing/get?limit=4");
        const data = await res.json();
        setListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGiftListing();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex items-center gap-1">
        <p className="text-xl lg:text-3xl text-slate-400 font-semibold uppercase">
          Latest <span className="text-slate-700">Collections</span>
        </p>
        <p className="w-8 h-[2px] bg-black"></p>
      </div>
      <div>
        {products && products.length > 0 && (
          <div className="">
            <div className="my-3">
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search"}
              >
                Show more recent collections
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {products.slice(0, 4).map((product) => (
                <ListingItem listing={product} key={product._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
