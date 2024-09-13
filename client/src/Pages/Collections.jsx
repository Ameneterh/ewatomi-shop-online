import { MdArrowDropDown } from "react-icons/md";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import ListingItem from "../Components/ListingItem";

export default function Collections() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    const fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(
          fpCopy.sort((a, b) => a.discountPrice - b.discountPrice)
        );
        break;

      case "high-low":
        setFilterProducts(
          fpCopy.sort((a, b) => b.discountPrice - a.discountPrice)
        );
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

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
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"unisex"}
                onChange={toggleCategory}
              />
              Unisex
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"kids"}
                onChange={toggleCategory}
              />
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
                onChange={toggleSubCategory}
              />
              Accessories
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"bags"}
                onChange={toggleSubCategory}
              />
              Bags
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"hairs"}
                onChange={toggleSubCategory}
              />
              Hairs
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"perfumes"}
                onChange={toggleSubCategory}
              />
              Perfumes
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"shoes"}
                onChange={toggleSubCategory}
              />
              Shoes
            </p>
            <p className="flex gap-2 items-center">
              <input
                className="w-4 h-4"
                type="checkbox"
                value={"wears"}
                onChange={toggleSubCategory}
              />
              Wears
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between text-base sm:text-2xl mb-4">
          <Title text1={"all"} text2={"collections"} />
          {/* product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-[1px] border-gray-300 rounded-full text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid gric-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ListingItem key={index} listing={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
