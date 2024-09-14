import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { TbCategoryPlus, TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

export default function ListingItem({ listing }) {
  const discountPrice = listing.discount ? listing.discountPrice : 0;
  const regularPrice = listing.regularPrice;
  const discount = (regularPrice - discountPrice).toLocaleString();
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/listing/${listing._id}`}
      className="relative hover:scale-105 w-52 transition ease-in-out overflow-hidden shadow-md bg-white rounded-lg"
    >
      <div className="absolute flex items-center h-8 p-2 top-1">
        <div className="flex flex-col">
          <div className="flex items-center text-xs rounded-sm bg-white px-1 font-semibold text-slate-700 z-10 py-1">
            {currency} {discount} off
          </div>
          <div className="bg-white h-3 w-3 rotate-45 ml-2 -mt-2"></div>
        </div>
      </div>
      <div
        className="overflow-hidden w-full"
        // style={{
        //   backgroundImage: `url(${listing.imageUrls[0]})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <img
          src={listing.imageUrls[0]}
          alt={listing._id}
          className="h-36 mx-auto w-full"
        />
      </div>

      <div className="flex flex-col justify-between">
        <p className="pt-2 px-2 pb-1 text-sm font-medium line-clamp-1">
          {listing.name}
        </p>
        <div className="flex items-center justify-between font-bold text-sm p-2">
          <span className="flex items-center text-green-500">
            {currency}
            {discountPrice.toLocaleString()}
          </span>
          <span className="text-red-400 font-normal line-through">
            &#x20A6; {regularPrice.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>

    // <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[250px]">
    //   <Link to={`/listing/${listing._id}`}>
    //     <img
    //       src={listing.imageUrls[0]}
    //       alt="listing cover"
    //       className="h-[250px] sm:h[150px] w-full object-cover hover:scale-105 transition-scale duration-300"
    //     />

    //     <div className="p-3 flex flex-col gap-2 w-full">
    //       <p className="truncate text-lg font-semibold text-slate-700 w-full">
    //         {listing.name}
    //       </p>
    //       <div className="flex item-center gap-2">
    //         <TbCategoryPlus className="text-green-800 font-semibold w-4 h-4" />
    //         <p className="text-sm text-gray-600 capitalize">
    //           {listing.category}
    //         </p>
    //       </div>
    //       <p className="line-clamp-2 text-sm text-gray-600">
    //         {listing.description}
    //       </p>
    //       <p className="flex items-center gap-0 mt-2 font-semibold">
    //         <TbCurrencyNaira className="text-lg" />
    //         {listing.discount
    //           ? listing.discountPrice.toLocaleString("en-us")
    //           : listing.regularPrice.toLocaleString("en-us")}
    //       </p>
    //     </div>
    //   </Link>
    // </div>
  );
}
