import { createContext, useEffect, useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/listing/get");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const currency = <TbCurrencyNaira className="text-xl" />;
  const delivery = "lagos" ? 1000 : 3000;

  const value = {
    products,
    currency,
    delivery,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
