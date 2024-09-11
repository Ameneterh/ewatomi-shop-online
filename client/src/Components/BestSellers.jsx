import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

export default function BestSellers() {
  const { products } = useContext(ShopContext);
  const [bestSller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestsller);
    setBestSeller(bestProduct.slice(0, 4));
  }, []);

  return <div>BestSellers</div>;
}
