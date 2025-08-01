import React from "react";

const NewArrivals = () => {
  return (
   <div className="max-w-screen-xl mx-auto">
    <div><h1 className="text-5xl text-center capitalize"> new arrival</h1>
     <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar - Filter */}
        <div className="bg-white p-4 rounded shadow col-span-1">
          <h2 className="text-xl font-bold mb-4">Filter Products</h2>

          {/* Collection Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Collection</label>
            <select className="w-full border border-gray-300 rounded px-4 py-2">
              <option disabled selected>
                Select Collection
              </option>
              <option>New Arrivals</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Dresses</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Accessories</option>
              <option>Sale</option>
            </select>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Availability</label>
            <label className="flex items-center space-x-2 mb-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>In Stock</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>Out of Stock</span>
            </label>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block mb-2 font-medium">Price</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="number"
                placeholder="Min"
                className="w-20 px-2 py-1 border rounded"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
            <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition">
              Apply
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="card bg-base-100 shadow-sm w-full">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Product"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Product {item}</h2>
                <p className="text-gray-500">Price: ৳12,312</p>
                <div className="card-actions mt-3">
                  <button className="btn btn-secondary">Quick Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
   </div>
  );
};

export default NewArrivals;




