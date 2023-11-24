import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    category: "all",
    discount: false,
    gift: false,
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  console.log(listings);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const categoryFromUrl = urlParams.get("category");
    const discountFromUrl = urlParams.get("discount");
    const giftFromUrl = urlParams.get("gift");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      categoryFromUrl ||
      discountFromUrl ||
      giftFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        category: categoryFromUrl || "all",
        discount: discountFromUrl === "true" ? true : false,
        gift: giftFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }
    const fetchListings = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "perfumes" ||
      e.target.id === "hair" ||
      e.target.id === "bags" ||
      e.target.id === "others"
    ) {
      setSidebardata({ ...sidebardata, category: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (e.target.id === "discount" || e.target.id === "gift") {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";
      const order = e.target.value.split("_")[1] || "desc";

      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("category", sidebardata.category);
    urlParams.set("discount", sidebardata.discount);
    urlParams.set("gift", sidebardata.gift);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className=" flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search ..."
              className="border rounded-lg p-3 w-full"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Category: </label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="all"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.category === "all"}
              />
              <span>All Categories</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="perfumes"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.category === "perfumes"}
              />
              <span>Perfumes</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="hair"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.category === "hair"}
              />
              <span>Hair</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="bags"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.category === "bags"}
              />
              <span>Bags</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="others"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.category === "others"}
              />
              <span>Others</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Discount/Gifts: </label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="discount"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.discount}
              />
              <span>Discount</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="gift"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.gift}
              />
              <span>Gift</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing Results:
        </h1>
      </div>
    </div>
  );
}
