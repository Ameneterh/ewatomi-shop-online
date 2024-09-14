import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, delivery, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"cart"} text2={"totals"} />
      </div>

      <div className="flex flex-col gap-2 text-sm mt-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="flex items-center">
            {currency}
            {getCartAmount().toLocaleString()}
          </p>
        </div>
        <hr />

        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p className="flex items-center">
            {currency}
            {delivery.toLocaleString()}
          </p>
        </div>
        <hr className="border-[1.5px] border-slate-200" />
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p className="flex items-center">
            {currency}
            {getCartAmount().toLocaleString() === 0
              ? 0
              : (getCartAmount() + delivery).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
