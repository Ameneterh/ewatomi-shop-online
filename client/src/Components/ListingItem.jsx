import { Button } from "flowbite-react";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { TbCategoryPlus, TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function ListingItem({ listing }) {
  const discountPrice = listing.discount ? listing.discountPrice : 0;
  const regularPrice = listing.regularPrice;
  const discount = (regularPrice - discountPrice).toLocaleString();

  return (
    <div className="group relative w-full sm:w-64 min-h-96 flex flex-col justify-between gap-1 hover:border hover:shadow-md overflow-hidden shadow-md bg-white rounded-xl pt-2">
      <div className="flex items-center justify-between w-full h-8 p-2">
        <div className=""></div>
        <div className="flex flex-col">
          <div className="rounded-sm bg-green-500 px-1 font-semibold text-white z-10">
            &#x20A6; {discount} off
          </div>
          <div className="bg-green-500 h-3 w-3 rotate-45 ml-2 -mt-2"></div>
        </div>
      </div>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt={listing._id}
          className="h-52 mx-auto w-full"
        />
      </Link>
      <p className="px-2 text-lg font-semibold">{listing.name}</p>
      <p className="px-2 text-sm line-clamp-2">{listing.description}</p>
      <div className="flex items-center justify-between font-bold text-sm p-2">
        <span className="text-green-500">
          &#x20A6; {discountPrice.toLocaleString()}
        </span>
        <span className="text-red-400 font-normal line-through">
          &#x20A6; {regularPrice.toLocaleString()}
        </span>
      </div>
      {/* <div className="w-full h-10 bg-red-600 hidden group-hover:flex text-white items-center justify-center text-sm font-semibold"> */}
      <Button
        // onClick={handleAddToCart}
        className="rounded-none gap-1 items-center hidden group-hover:flex"
      >
        <FaCartPlus className="text-xl" />
        ADD TO CART
      </Button>
      {/* </div> */}
    </div>

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
