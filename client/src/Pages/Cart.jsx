import React, { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="px-4 border-t pt-14 max-w-6xl mx-auto">
      <div className="text-2xl mb-3">
        <Title text1={"your"} text2={"cart"} />
      </div>

      {/* product entry */}
      <div>
        {cartData &&
          cartData.map((item, index) => {
            const productsData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productsData.imageUrls[0]}
                    className="w-16 sm:w-20"
                    alt=""
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productsData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="flex items-center">
                        {currency}
                        {productsData.discountPrice}
                      </p>
                      <p className="px-2 sm:py-1 border bg-slate-50 w-10 flex items-center justify-center rounded-md">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                {/* change product quantity */}
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="border max-w-10 sm:max-w-20 sm:px-2 py-1"
                />
                <MdDeleteForever
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="text-md sm:text-2xl cursor-pointer"
                />
              </div>
            );
          })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />

          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="flex items-center bg-green-700 my-8 px-8 py-3 text-sm font-medium text-white hover:bg-green-500 active:bg-blue-600 rounded-md"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
