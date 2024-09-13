import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ListingItem from "./ListingItem";

export default function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-12">
      <div className="text-center text-3xl py-2">
        <Title text1={"related"} text2={"products"} />
      </div>

      <div className="flex justify-center flex-wrap gap-4 gap-y-6">
        {related &&
          related.map((item, index) => (
            <ListingItem key={index} listing={item} />
          ))}
      </div>
    </div>
  );
}
