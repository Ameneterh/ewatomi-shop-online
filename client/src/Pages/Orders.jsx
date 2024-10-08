import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

export default function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="max-w-6xl mx-auto min-h-[80vh] p-3 border-t py-8 sm:py-16">
      <div className="text-2xl">
        <Title text1={"my"} text2={"orders"} />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img src={item.imageUrls[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="sm:text-base font-medium ">{item.name}</p>

                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="flex items-center text-md font-medium">
                    {currency}
                    {item.discountPrice.toLocaleString()}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">Jul 25, 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>

              <button className="border px-4 py-2 text-sm font-medium rounded-md hover:bg-slate-100 hover:shadow-sm">
                Tract Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
