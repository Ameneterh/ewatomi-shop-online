import { MdArrowDropDown } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ListingItem from "../Components/ListingItem";

export default function Collections() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-3 flex flex-col sm:flex-row gap-2 sm:gap-10 sm:my-10">
      {/* filter options */}
      <div className="min-w-48">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase font-bold"
        >
          filters{" "}
          <MdArrowDropDown
            className={`text-2xl sm:hidden ${showFilter ? "" : "-rotate-90"}`}
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"Kids"} />
              Kids
            </p>
          </div>
        </div>

        {/* sub-category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-3 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">sub-categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"accessories"}
              />
              Accessories
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"bags"} />
              Bags
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"hairs"} />
              Hairs
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"perfumes"} />
              Perfumes
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"shoes"} />
              Shoes
            </p>
            <p className="flex gap-2 items-center">
              <input className="w-4 h-4" type="checkbox" value={"wears"} />
              Wears
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all"} text2={"collections"} />
          {/* product sort */}
          <select className="border-2 border-gray-300 text-sm px-1">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid gric-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {products &&
            products.map((item, index) => (
              <ListingItem key={index} listing={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
