import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { FaCartPlus, FaShare, FaStar } from "react-icons/fa";
import { TbCategoryPlus, TbCurrencyNaira } from "react-icons/tb";
import Contact from "../Components/Contact";
import { ShopContext } from "../Context/ShopContext";
import RelatedProducts from "../Components/RelatedProducts";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser._id);

  const { listingId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductsData = async () => {
    products.map((item) => {
      if (item._id === listingId) {
        setProductsData(item);
        setImage(item.imageUrls[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [listingId]);

  return productsData ? (
    <div className="border-t-2 p-3 py-10 transition-opacity ease-in duration-500 opacity-100 max-w-6xl mx-auto">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.imageUrls.slice(0, 4).map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={item.name}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* product information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <FaStar className="text-lg text-orange-500" />
            <FaStar className="text-lg text-orange-500" />
            <FaStar className="text-lg text-orange-500" />
            <FaStar className="text-lg text-orange-500" />
            <FaStar className="text-lg text-slate-300" />
            <p className="pl-2">(152)</p>
          </div>
          <p className="mt-5 text-2xl font-medium flex items-center">
            {currency}
            {productsData.discountPrice}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productsData.description}
          </p>

          <div className="flex flex-col gap-1 my-8">
            <p>Select Size:</p>
            <div className="flex gap-2">
              {productsData.sizes ? (
                <>
                  {productsData.sizes.map((item, index) => (
                    <button
                      onClick={() => setSize(item)}
                      className={`flex items-center justify-center border py-2 px-4 bg-gray-100 rounded-md shadow-sm w-12 hover:bg-gray-200 ${
                        item === size ? "border-orange-500" : ""
                      }`}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </>
              ) : (
                <div>This product has no sizes!</div>
              )}
            </div>
          </div>
          <button
            onClick={() => addToCart(productsData._id, size)}
            className="flex items-center bg-green-700 px-8 py-3 text-sm font-medium text-white hover:bg-green-500 active:bg-blue-600 rounded-md"
          >
            <FaCartPlus className="text-lg mr-1" />
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-400" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery option available!</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and Review Section */}
      <div className="mt-10">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (152)</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
        <p>
          <span className="font-medium">Ewatomi Unique Beauty Place's</span>{" "}
          online shop is a website (digital platform) that allows you to buy or
          sell products or services over the internet without needing to own or
          visit a physical store.
        </p>
      </div>

      {/* display related products */}
      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0 min-h-screen"></div>
  );
  // <main className="">
  //   {loading && <p className="text-center my-7 text-2xl">Loading ...</p>}

  //   {error && (
  //     <p className="text-center my-7 text-2xl">Something went wrong!</p>
  //   )}

  //   {listing && !loading && !error && (
  //     <div className="z-0">
  //       <Swiper navigation>
  //         {listing.imageUrls.map((url) => (
  //           <SwiperSlide key={url}>
  //             <div
  //               className="h-[450px]"
  //               style={{
  //                 background: `url(${url}) center no-repeat`,
  //                 backgroundSize: "cover",
  //               }}
  //             ></div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //       <div className="fixed top-[21%] sm:top-[25%] right-[3%] border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
  //         <FaShare
  //           className="text-slate-500"
  //           onClick={() => {
  //             navigator.clipboard.writeText(window.location.href);
  //             setCopied(true);
  //           }}
  //         />
  //       </div>
  //       {copied &&
  //         setTimeout(() => {
  //           setCopied(false);
  //         }, 2000) && (
  //           <p className="fixed top-[28%] right-[7%] z-10 rounded-md bg-slate-100 p-2">
  //             Link copied!
  //           </p>
  //         )}
  //       <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-6">
  //         <p className="flex items-center text-2xl font-semibold">
  //           {listing.name} - <TbCurrencyNaira />{" "}
  //           {listing.discount
  //             ? listing.discountPrice.toLocaleString("en-US")
  //             : listing.regularPrice.toLocaleString("en-US")}
  //         </p>
  //         <p className="flex items-center gap-1">
  //           <TbCategoryPlus className="text-green-800 font-semibold" />
  //           {listing.category}
  //         </p>
  //         <div className="flex gap-4">
  //           {listing.quantity > 0 ? (
  //             <p className="bg-red-800 w-full max-w-[200px] text-white text-center py-2 rounded-md">
  //               In Stock
  //             </p>
  //           ) : (
  //             " "
  //           )}
  //           {listing.gift && (
  //             <p className="bg-blue-600 w-full max-w-[200px] text-white text-center p-1 rounded-md">
  //               Free Gift Inside
  //             </p>
  //           )}
  //           {listing.discount && (
  //             <p className="flex items-center bg-green-900 w-full max-w-[200px] text-white justify-center p-1 rounded-md">
  //               <TbCurrencyNaira />{" "}
  //               {(
  //                 +listing.regularPrice - +listing.discountPrice
  //               ).toLocaleString("en-US")}{" "}
  //               discount
  //             </p>
  //           )}
  //         </div>
  //         <p className="text-slate-800">
  //           <span className="font-semibold text-black">Description - </span>
  //           {listing.description}
  //         </p>

  //         {currentUser && listing.userRef !== currentUser._id && !contact && (
  //           <button
  //             onClick={() => setContact(true)}
  //             className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
  //           >
  //             Contact Vendor
  //           </button>
  //         )}
  //         {!currentUser && !contact && (
  //           <button
  //             onClick={() => setContact(true)}
  //             className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3"
  //           >
  //             Contact Vendor
  //           </button>
  //         )}
  //         {contact && <Contact listing={listing} />}
  //       </div>
  //     </div>
  //   )}
  // </main>
}
