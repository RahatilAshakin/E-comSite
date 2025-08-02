import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

const PRODUCTS_PER_PAGE = 12;

const NewArrivals = () => {
  const products = useLoaderData(); // Load New Arrivals data (array of product objects)

  // State variables for pagination, filters, and sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [availability, setAvailability] = useState({ in: false, out: false });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort products based on user selections
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (
        selectedCollection &&
        product.category
          .toLowerCase()
          .indexOf(selectedCollection.toLowerCase()) === -1
      ) {
        return false;
      }

      if (availability.in && product.availability !== "in_stock") return false;
      if (availability.out && product.availability !== "out_of_stock")
        return false;

      if (minPrice && product.price < parseFloat(minPrice)) return false;
      if (maxPrice && product.price > parseFloat(maxPrice)) return false;

      return true;
    });

    filtered = [...filtered]; // Copy array before sorting

    // Sort filtered products based on sortBy option
    switch (sortBy) {
      case "price_low_high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popularity":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      // default: no sorting
    }

    return filtered;
  }, [products, selectedCollection, availability, minPrice, maxPrice, sortBy]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  // Page change handler with validation
  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // Reset to first page when filters change
  const handleFilterChange = () => setCurrentPage(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-pink-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Title and subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow">
            New Arrivals
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Discover the latest styles fresh off the shelves
          </p>
        </div>

        {/* ===== Filters and Sort By Section ===== */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-stretch gap-4">
            {/* Filters Container */}
            <div className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-xl shadow-lg flex-grow">
              {/* Collection Filter */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">
                  Collection
                </label>
                <select
                  value={selectedCollection}
                  onChange={(e) => {
                    setSelectedCollection(e.target.value);
                    handleFilterChange();
                  }}
                  className="min-w-[150px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option value="">All</option>
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

              {/* Availability Filter */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">
                  Availability
                </label>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={availability.in}
                      onChange={() =>
                        setAvailability((prev) => {
                          handleFilterChange();
                          return { ...prev, in: !prev.in };
                        })
                      }
                    />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={availability.out}
                      onChange={() =>
                        setAvailability((prev) => {
                          handleFilterChange();
                          return { ...prev, out: !prev.out };
                        })
                      }
                    />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">
                  Price
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-[80px] px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-[80px] px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleFilterChange}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Sort By Container */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-start flex-grow min-w-[200px]">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="min-w-[160px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="default">Default</option>
                <option value="price_low_high">Price: Low to High</option>
                <option value="price_high_low">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* ===== Product Cards Grid ===== */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {paginatedProducts.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 text-lg">
              No products found.
            </p>
          ) : (
            paginatedProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:border-pink-500"
              >
                {/* Product Image & Label */}
                <div className="relative w-full h-64">
                  <img
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                    src={product.image}
                    alt={product.title}
                  />
                  <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                    NEW
                  </span>
                </div>
                {/* Product Details */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition line-clamp-2">
                    {product.title}
                  </h2>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex gap-4 items-center">
                      <span className="text-pink-600 font-bold text-xl">
                        ${product.price}
                      </span>
                      {product.list_price && (
                        <span className="line-through text-gray-400 text-lg">
                          ${product.list_price}
                        </span>
                      )}
                    </div>
                    <span className="text-pink-600 capitalize font-bold text-sm">
                      {product.condition}
                    </span>
                  </div>
                  {/* View Product Button */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-pink-600 transition duration-300"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ===== Pagination Controls ===== */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
