import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const PRODUCTS_PER_PAGE = 12;

const Sale = () => {
  const products = useLoaderData(); // 👈 This grabs the sale.json data
  const [currentPage, setCurrentPage] = useState(1);

  console.log("Total products:", products.length); // ✅ moved inside component

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-100 py-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-600 drop-shadow">
            Exclusive Women’s Sale
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Enjoy up to 40% off on trending summer styles
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 hover:border-amber-500"
            >
              <div className="relative">
                <img
                  className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  alt={product.title}
                />
                <span className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  SALE
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition line-clamp-2">
                  {product.title}
                </h2>

                {/* Price and Condition */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <span className="text-rose-600 font-bold text-xl">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-400 text-lg">
                      ${product.list_price}
                    </span>
                  </div>
                  <span className="text-rose-600 capitalize font-bold text-xl">
                    <span>Condition:</span> {product.condition}
                  </span>
                </div>

                {/* View Button */}
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-500 hover:to-amber-600 transition duration-300"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
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
                  ? "bg-amber-500 text-white"
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

export default Sale;
