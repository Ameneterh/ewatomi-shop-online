import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { BsBank } from "react-icons/bs";
import { ShopContext } from "../Context/ShopContext";

export default function PlaceOrder() {
  const [method, setMethod] = useState("transfer");
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t p-3 max-w-6xl mx-auto mb-16">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Your email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street address"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"payment"} text2={"method"} />

          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("monnify")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "monnify" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src="/monnify_logo.png" className="h-5 mx-2" alt="" />
            </div>
            <div
              onClick={() => setMethod("transfer")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "transfer" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-2 flex items-center">
                <BsBank className="text-[17px] mr-2" />
                TRANSFER/DEPOSIT
              </p>
            </div>
          </div>

          <div className="w-full text-ellipsis mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="flex items-center bg-green-700 px-8 py-3 text-sm font-medium text-white hover:bg-green-500 active:bg-blue-600 rounded-md"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
