import React, { useEffect, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import ListingItem from "../Components/ListingItem";

export default function NewArrivals() {
  const [newProducts, setNewProducts] = useState(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await fetch("/api/listing/get?limit=5");
        const data = await res.json();
        setNewProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNewProducts();
  }, []);

  return (
    <div className="px-3 w-full">
      <p className="flex items-center gap-2 px-0 md:px-20 mt-10 uppercase text-3xl font-bold text-red-500">
        <TbCategoryPlus /> new arrivals
      </p>
      <div className="flex flex-wrap py-10 md:py-10 items-center justify-center max-w-5xl mx-auto gap-12">
        {newProducts &&
          newProducts.length > 0 &&
          newProducts.map((newItems) => (
            <ListingItem key={newItems._id} listing={newItems} />
          ))}
      </div>
    </div>
  );
}
