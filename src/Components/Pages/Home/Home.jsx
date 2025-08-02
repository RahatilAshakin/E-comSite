// React and router imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Category items for display
const categories = [
  {
    id: 1,
    name: "New Arrivals",
    img: "https://i.ibb.co/1t1DQYsk/3.webp",
    link: "/new-arrivals",
  },
  {
    id: 2,
    name: "Women",
    img: "https://i.ibb.co/whdpKt7K/360-F-812972184-x5z-WWI0-F61-GAq-Om-LVcti-F9-HTI8ti-FEBV.jpg",
    link: "/women",
  },
  {
    id: 3,
    name: "Kids",
    img: "https://i.ibb.co/VcnVktMD/111.jpg",
    link: "/kids",
  },
  {
    id: 4,
    name: "Dresses",
    img: "https://i.ibb.co/GQ6tPryG/dress.jpg",
    link: "/dresses",
  },
  {
    id: 5,
    name: "Tops",
    img: "https://i.ibb.co/Q7rPL0nH/tops1.jpg",
    link: "/tops",
  },
  {
    id: 6,
    name: "Bottoms",
    img: "https://i.ibb.co/0pnXCLgF/bott.jpg",
    link: "/bottoms",
  },
  {
    id: 7,
    name: "Accessories",
    img: "https://i.ibb.co/7xDXDqjV/acc1.webp",
    link: "/accessories",
  },
  {
    id: 8,
    name: "Sale",
    img: "https://i.ibb.co/ZpKR6ftJ/11.webp",
    link: "/sale",
  },
];

// Image slider (carousel) content
const images = [
  { id: 1, src: "https://i.ibb.co/1t1DQYsk/3.webp", alt: "Slide 1" },
  { id: 2, src: "https://i.ibb.co/VcfB2wgW/4.jpg", alt: "Slide 2" },
  { id: 3, src: "https://i.ibb.co/mC6vWT29/5.webp", alt: "Slide 3" },
  { id: 4, src: "https://i.ibb.co/3mnrh4qR/6.jpg", alt: "Slide 4" },
  { id: 5, src: "https://i.ibb.co/zHhyL87v/7.jpg", alt: "Slide 5" },
  { id: 6, src: "https://i.ibb.co/ZpKR6ftJ/11.webp", alt: "Slide 6" },
  { id: 7, src: "https://i.ibb.co/pjsY8Rjr/88.jpg", alt: "Slide 7" },
  { id: 8, src: "https://i.ibb.co/GQGKGwbx/89.webp", alt: "Slide 8" },
  { id: 9, src: "https://i.ibb.co/B2wdBmDQ/4563.jpg", alt: "Slide 9" },
  { id: 10, src: "https://i.ibb.co/Q3cxNCRp/baby1.jpg", alt: "Slide 10" },
];

// Products for flash sale section
const products = [
  {
    id: 1,
    name: "Product One",
    img: "https://i.ibb.co/1t1DQYsk/3.webp",
    price: "$40",
    discountPrice: "$30",
  },
  {
    id: 2,
    name: "Product Two",
    img: "https://i.ibb.co/VcfB2wgW/4.jpg",
    price: "$50",
    discountPrice: "$35",
  },
  {
    id: 3,
    name: "Product Three",
    img: "https://i.ibb.co/mC6vWT29/5.webp",
    price: "$60",
    discountPrice: "$45",
  },
  {
    id: 4,
    name: "Product Four",
    img: "https://i.ibb.co/3mnrh4qR/6.jpg",
    price: "$55",
    discountPrice: "$40",
  },
  {
    id: 5,
    name: "Product Five",
    img: "https://i.ibb.co/zHhyL87v/7.jpg",
    price: "$70",
    discountPrice: "$50",
  },
  {
    id: 6,
    name: "Product Six",
    img: "https://i.ibb.co/ZpKR6ftJ/11.webp",
    price: "$80",
    discountPrice: "$60",
  },
];

// Countdown timer component for flash sale
const CountdownTimer = ({
  initialHours = 2,
  initialMinutes = 15,
  initialSeconds = 42,
}) => {
  const totalInitialSeconds =
    initialHours * 3600 + initialMinutes * 60 + initialSeconds;

  const [secondsLeft, setSecondsLeft] = useState(totalInitialSeconds);

  // Countdown logic
  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timerId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [secondsLeft]);

  // Formatting values with padding
  const pad = (num) => num.toString().padStart(2, "0");

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="flex gap-3 font-mono font-bold text-red-600 text-lg select-none">
      <div className="bg-red-100 rounded px-2 py-1 min-w-[36px] text-center">
        {pad(hours)}
      </div>
      <div className="bg-red-100 rounded px-2 py-1 min-w-[36px] text-center">
        {pad(minutes)}
      </div>
      <div className="bg-red-100 rounded px-2 py-1 min-w-[36px] text-center">
        {pad(seconds)}
      </div>
    </div>
  );
};

const Home = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-change slides every 4 seconds
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearTimeout(timer);
  }, [current, length]);

  // Manual slide controls
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Image carousel & sidebar benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Carousel */}
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

          {/* Carousel controls */}
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

        {/* Shopping benefits sidebar */}
        <div className="col-span-1 bg-white shadow-md rounded-lg p-4 h-[300px] md:h-[400px] lg:h-[500px] overflow-y-auto space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800">
            Why Shop with TZ Fashion?
          </h3>

          {/* Feature 1 */}
          <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
              alt="Fast Delivery"
              className="w-8 h-8"
            />
            <div>
              <h4 className="font-semibold">Fast & Free Delivery</h4>
              <p className="text-sm text-gray-600">
                Receive your order in 1–3 business days across Bangladesh.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Easy Returns"
              className="w-8 h-8"
            />
            <div>
              <h4 className="font-semibold">7-Day Easy Return</h4>
              <p className="text-sm text-gray-600">
                Changed your mind? Return it with no questions asked.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3754/3754898.png"
              alt="Best Deals"
              className="w-8 h-8"
            />
            <div>
              <h4 className="font-semibold">Top Deals Everyday</h4>
              <p className="text-sm text-gray-600">
                Enjoy exclusive flash sales and promo discounts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale Section */}
      <section className="mt-12 max-w-screen-xl mx-auto px-4">
        {/* Flash Sale Banner */}
        <div className="flex justify-between items-center mb-6 border-b-4 border-red-600 pb-2">
          <div className="flex items-center gap-4">
            <span className="bg-red-600 text-white uppercase font-bold px-3 py-1 rounded tracking-wide">
              FLASH SELL
            </span>
          </div>

          {/* Countdown clock */}
          <CountdownTimer
            initialHours={2}
            initialMinutes={15}
            initialSeconds={42}
          />
        </div>

        {/* Flash Sale Header + Button */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
          <p className="font-semibold text-gray-900 uppercase tracking-wide">
            Sell is running now
          </p>
          <Link to="/sale">
            <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition">
              See All
            </button>
          </Link>
        </div>

        {/* Flash Sale Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-36 object-cover rounded-md mb-3"
              />
              <h3 className="text-center font-semibold text-base mb-1 truncate w-full">
                {product.name}
              </h3>
              <div className="mb-2 text-center w-full">
                <span className="text-gray-400 line-through mr-1 text-sm">
                  {product.price}
                </span>
                <span className="text-red-600 font-bold text-lg">
                  {product.discountPrice}
                </span>
              </div>
              <button className="w-full bg-red-600 text-white py-1 rounded text-sm hover:bg-red-700 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="mt-12 max-w-screen-xl rounded-2xl  mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide">
          Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {categories.map(({ id, name, img, link }) => (
            <Link
              key={id}
              to={link}
              className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer bg-white"
            >
              {/* Category image with zoom & overlay on hover */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-36 sm:h-44 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Category name */}
              <div className="p-4 bg-gradient-to-r from-white via-gray-50 to-white text-center font-semibold text-gray-800 text-lg tracking-wide">
                {name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
