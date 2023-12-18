import React from "react";
import { TbCategoryPlus, TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[300px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[250px] sm:h[150px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />

        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700 w-full">
            {listing.name}
          </p>
          <div className="flex item-center gap-2">
            <TbCategoryPlus className="text-green-800 font-semibold w-4 h-4" />
            <p className="text-sm text-gray-600 capitalize">
              {listing.category}
            </p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">
            {listing.description}
          </p>
          <p className="flex items-center gap-0 mt-2 font-semibold">
            <TbCurrencyNaira className="text-lg" />
            {listing.discount
              ? listing.discountPrice.toLocaleString("en-us")
              : listing.regularPrice.toLocaleString("en-us")}
          </p>
        </div>
      </Link>
    </div>
  );
}
