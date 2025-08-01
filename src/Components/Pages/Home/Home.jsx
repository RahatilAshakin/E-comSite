import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "https://i.ibb.co/NBp3qGk/1.jpg", alt: "Slide 1" },
  { id: 2, src: "https://i.ibb.co/SDftRtd2/2.jpg", alt: "Slide 2" },
  { id: 3, src: "https://i.ibb.co/BVKxkBPc/3.jpg", alt: "Slide 3" },
  { id: 4, src: "https://i.ibb.co/spMZXjhp/4.jpg", alt: "Slide 4" },
  { id: 5, src: "https://i.ibb.co/svwPpKf7/5.jpg", alt: "Slide 5" },
  { id: 6, src: "https://i.ibb.co/20kfd3zR/7.jpg", alt: "Slide 6" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearTimeout(timer);
  }, [current, length]);

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <h2 className="text-4xl text-center mb-8">Home</h2>

      {/* Grid: lg=5 columns, md=2 columns, sm=1 column */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Carousel spans 4 columns on large screens */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Text panel occupies remaining column */}
        <div className="col-span-1 bg-white shadow-md rounded-lg p-4 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto">
          <h3 className="text-2xl font-semibold mb-2 text-center">
            Welcome to TZ Fashion
          </h3>
          <p className="text-gray-700 text-sm leading-6">
            TZ Fashion brings you a curated selection of premium women's fashion—from elegant wear
            to everyday luxuries. Discover breathable fabrics, bold patterns, and exclusive collections
            that define comfort and style. Shop with confidence, enjoy fast delivery, and elevate
            your wardrobe with our signature pieces!
          </p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-pink-600" : "bg-gray-300"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Banner below */}
      <div className="mt-8 w-full h-[200px] bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 flex items-center justify-center rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
          Exclusive Summer Sale – Up to 60% OFF!
        </h3>
      </div>
    </div>
  );
};

export default Home;
