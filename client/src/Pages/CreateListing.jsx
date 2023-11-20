import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            className="border p-3 rounded-lg"
            id="Name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-3 rounded-lg"
            id="category"
            required
          />
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="price"
                min="1"
                max="500000"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Price</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discountprice"
                min="1"
                max="500000"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Discounted Price</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="qty-in-stock"
                min="1"
                max="500000"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Quantity in Stock</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:{" "}
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}
