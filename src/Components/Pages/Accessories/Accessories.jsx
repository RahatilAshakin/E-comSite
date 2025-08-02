import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

const PRODUCTS_PER_PAGE = 12;

const Accessories = () => {
  const products = useLoaderData();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [availability, setAvailability] = useState({ in: false, out: false });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      if (
        selectedCollection &&
        product.category.toLowerCase().indexOf(selectedCollection.toLowerCase()) === -1
      ) {
        return false;
      }
      if (availability.in && product.availability !== "in_stock") return false;
      if (availability.out && product.availability !== "out_of_stock") return false;
      if (minPrice && product.price < parseFloat(minPrice)) return false;
      if (maxPrice && product.price > parseFloat(maxPrice)) return false;
      return true;
    });

    filtered = [...filtered];

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
    }

    return filtered;
  }, [products, selectedCollection, availability, minPrice, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleFilterChange = () => setCurrentPage(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-10 rounded-xl shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 drop-shadow">
            Stylish Accessories Collection
          </h1>
          <p className="text-gray-600 mt-2 text-lg">Find the perfect finishing touches to your look</p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap justify-between items-stretch gap-4">
            <div className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-xl shadow-lg flex-grow">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">Collection</label>
                <select
                  value={selectedCollection}
                  onChange={(e) => {
                    setSelectedCollection(e.target.value);
                    handleFilterChange();
                  }}
                  className="min-w-[150px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="">All</option>
                  <option>New Arrivals</option>
                  <option>Accessories</option>
                  <option>Bags</option>
                  <option>Jewelry</option>
                  <option>Hats</option>
                  <option>Sale</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">Availability</label>
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

              <div className="flex flex-col">
                <label className="mb-2 text-sm font-semibold text-gray-700">Price</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-[80px] px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-[80px] px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={handleFilterChange}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-start flex-grow min-w-[200px]">
              <label className="mb-2 block text-sm font-semibold text-gray-700">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="min-w-[160px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {paginatedProducts.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 text-lg">No products found.</p>
          ) : (
            paginatedProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="group bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600 transition">
                    {product.title}
                  </h3>
                  <div className="text-gray-600 text-sm mb-2">
                    <span className="text-green-600 font-bold">${product.price}</span>{" "}
                    {product.list_price && (
                      <span className="line-through text-gray-400 ml-2">${product.list_price}</span>
                    )}
                  </div>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                  >
                    View Product
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
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
                  ? "bg-green-600 text-white"
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

export default Accessories;
