import React, { useState, useMemo, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const images = [
  "https://i.ibb.co/0RGHzYfK/1-Hot-Deepika-Padukones-photoshoot-for-Elle-is-simply-wow.jpg",
  "https://i.ibb.co/VWwMB5Cs/2.jpg",
  "https://i.ibb.co/RnyWsSy/3.jpg",
  "https://i.ibb.co/spfbm3Q6/4.jpg",
  "https://i.ibb.co/Qv4grx6W/4de0a90b805eb8edefe0f85a0a8c8b2d.jpg",
  "https://i.ibb.co/9ktDmNbR/5.jpg",
  "https://i.ibb.co/FLffK59X/6.jpg",
  "https://i.ibb.co/JjStrP8X/6b40cf30b0237a50354a6a82bc6bdc31.webp",
  "https://i.ibb.co/qYyNzKYQ/08e5c04be4f5eb8e856f2b74acc271df.jpg",
  "https://i.ibb.co/kV22tjrz/36ba0dea4a33cd6106f07b2ff35edb38.jpg",
  "https://i.ibb.co/W4jMc5Mt/63a05811c515d90c173ae83ea11043de.webp",
  "https://i.ibb.co/DgfhvbNB/334d9104351bd5d807ca5a5004cdde6a.jpg",
  "https://i.ibb.co/Z6Kn3w4K/360-F-812972184-x5z-WWI0-F61-GAq-Om-LVcti-F9-HTI8ti-FEBV.jpg",
  "https://i.ibb.co/zTDmn2ww/880-BB7-F4-5-B39-49-F8-9-A61-D1-E1606-BAC7-B.webp",
  "https://i.ibb.co/fGKdMC42/b7a4855f729b7aa1840d7df229270d57.jpg",
  "https://i.ibb.co/nqLBVSRh/devi-7312-8683305-2.webp",
  "https://i.ibb.co/Q71GSx2m/devi-7720-9683305-1.webp",
  "https://i.ibb.co/mF9ysJCS/sexy-carefree-girl-bold-dress-sexy-woman-orange-print-dress-510370-44.jpg",
  "https://i.ibb.co/C5wh8C51/woman-g6b0bea1c3-1280-768x576.jpg",
];

const chunk1 = images.slice(0, 6);
const chunk2 = images.slice(6, 12);
const chunk3 = images.slice(12);

const PRODUCTS_PER_PAGE = 12;

const Women = () => {
  const products = useLoaderData(); // Women products JSON

  // Carousel state
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  // Filters, pagination, sorting state
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [availability, setAvailability] = useState({ in: false, out: false });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Carousel auto slide effect
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCurrentIndexes((prev) => [(prev[0] + 1) % chunk1.length, prev[1], prev[2]]);
      }, 3000),
      setInterval(() => {
        setCurrentIndexes((prev) => [prev[0], (prev[1] + 1) % chunk2.length, prev[2]]);
      }, 3500),
      setInterval(() => {
        setCurrentIndexes((prev) => [prev[0], prev[1], (prev[2] + 1) % chunk3.length]);
      }, 4000),
    ];
    return () => intervals.forEach(clearInterval);
  }, []);

  const handlePrev = (col) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => {
        if (i === col) {
          if (i === 0) return (val - 1 + chunk1.length) % chunk1.length;
          if (i === 1) return (val - 1 + chunk2.length) % chunk2.length;
          if (i === 2) return (val - 1 + chunk3.length) % chunk3.length;
        }
        return val;
      })
    );
  };

  const handleNext = (col) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => {
        if (i === col) {
          if (i === 0) return (val + 1) % chunk1.length;
          if (i === 1) return (val + 1) % chunk2.length;
          if (i === 2) return (val + 1) % chunk3.length;
        }
        return val;
      })
    );
  };

  const chunks = [chunk1, chunk2, chunk3];

  // Filter and sort products
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
      // default no sort
    }

    return filtered;
  }, [products, selectedCollection, availability, minPrice, maxPrice, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleFilterChange = () => setCurrentPage(1);

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {/* Women Carousel */}
      <h1 className="capitalize text-5xl text-center font-bold text-amber-500 my-6">
        this is women page
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        {chunks.map((chunk, colIndex) => (
          <div key={colIndex} className="w-full md:w-1/3">
            <div className="carousel w-full relative overflow-hidden rounded-xl h-72 shadow-md bg-white flex items-center justify-center">
              <img
                src={chunk[currentIndexes[colIndex]]}
                alt={`Slide ${currentIndexes[colIndex] + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex justify-between">
                <button onClick={() => handlePrev(colIndex)} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={() => handleNext(colIndex)} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Habijabi text */}
      <div className="mb-10 text-center font-semibold text-lg">habijabi</div>

      {/* Women Products Section (like your Kids) */}
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 py-10 rounded-xl shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Title and subtitle */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow">
              Stylish & Elegant Women Collection
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Discover the latest trends and timeless classics for women
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between items-stretch gap-4">
              <div className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-xl shadow-lg flex-grow">
                {/* Collection Filter */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-semibold text-gray-700">Collection</label>
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
                    <option>Dresses</option>
                    <option>Tops</option>
                    <option>Bottoms</option>
                    <option>Accessories</option>
                    <option>Sale</option>
                  </select>
                </div>

                {/* Availability Filter */}
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

                {/* Price Filter */}
                <div className="flex flex-col">
                  <label className="mb-2 text-sm font-semibold text-gray-700">Price</label>
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
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-5 py-2 rounded-lg transition duration-200"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Sort By */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-start flex-grow min-w-[200px]">
                <label className="mb-2 block text-sm font-semibold text-gray-700">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="min-w-[160px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-600 transition">
                      {product.title}
                    </h3>
                    <div className="text-gray-600 text-sm mb-2">
                      <span className="text-pink-600 font-bold">${product.price}</span>{" "}
                      {product.list_price && (
                        <span className="line-through text-gray-400 ml-2">${product.list_price}</span>
                      )}
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination Controls */}
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
                    ? "bg-pink-600 text-white"
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
    </div>
  );
};

export default Women;
