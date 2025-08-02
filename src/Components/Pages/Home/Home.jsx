import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

// ==== Category Data for Grid Section ====
const categories = [
  { id: 1, name: "New Arrivals", img: "https://i.ibb.co/1t1DQYsk/3.webp", link: "/new-arrivals" },
  { id: 2, name: "Women", img: "https://i.ibb.co/whdpKt7K/360-F-812972184-x5z-WWI0-F61-GAq-Om-LVcti-F9-HTI8ti-FEBV.jpg", link: "/women" },
  { id: 3, name: "Kids", img: "https://i.ibb.co/VcnVktMD/111.jpg", link: "/kids" },
  { id: 4, name: "Dresses", img: "https://i.ibb.co/GQ6tPryG/dress.jpg", link: "/dresses" },
  { id: 5, name: "Tops", img: "https://i.ibb.co/Q7rPL0nH/tops1.jpg", link: "/tops" },
  { id: 6, name: "Bottoms", img: "https://i.ibb.co/0pnXCLgF/bott.jpg", link: "/bottoms" },
  { id: 7, name: "Accessories", img: "https://i.ibb.co/7xDXDqjV/acc1.webp", link: "/accessories" },
  { id: 8, name: "Sale", img: "https://i.ibb.co/ZpKR6ftJ/11.webp", link: "/sale" },
];

// ==== Images used in the main carousel ====
const carouselImages = [
  { id: 1, src: "https://i.ibb.co/1t1DQYsk/3.webp", alt: "Slide 1" },
  { id: 2, src: "https://i.ibb.co/VcfB2wgW/4.jpg", alt: "Slide 2" },
  { id: 3, src: "https://i.ibb.co/mC6vWT29/5.webp", alt: "Slide 3" },
  { id: 4, src: "https://i.ibb.co/3mnrh4qR/6.jpg", alt: "Slide 4" },
  { id: 5, src: "https://i.ibb.co/zHhyL87v/7.jpg", alt: "Slide 5" },
  { id: 6, src: "https://i.ibb.co/ZpKR6ftJ/11.webp", alt: "Slide 6" },
  { id: 7, src: "https://i.ibb.co/pjsY8Rjr/88.jpg", alt: "Slide 7" },
];

// ==== Countdown Timer Component ====
const CountdownTimer = ({ initialHours = 1, initialMinutes = 59, initialSeconds = 59 }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);

  // Timer counts down every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer); // Cleanup timer
  }, []);

  // Format numbers to always show two digits
  const formatTime = (time) => String(time).padStart(2, '0');

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="flex gap-2 text-red-600 font-bold text-lg">
      <span className="bg-red-100 px-2 py-1 rounded">{formatTime(hours)}</span>:
      <span className="bg-red-100 px-2 py-1 rounded">{formatTime(minutes)}</span>:
      <span className="bg-red-100 px-2 py-1 rounded">{formatTime(seconds)}</span>
    </div>
  );
};

const Home = () => {
  // Load flash sale product data from loader (synced from JSON file)
  const flashSaleProducts = useLoaderData();

  // === Carousel logic ===
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* === Top Section: Carousel + Sidebar Benefits === */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
        {/* Carousel Section */}
        <div className="col-span-1 lg:col-span-4 relative h-72 md:h-96 rounded overflow-hidden">
          {carouselImages.map((img, i) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        {/* Benefits Sidebar */}
        <div className="bg-white shadow-lg p-4 rounded space-y-4">
          <h3 className="text-lg font-semibold text-center">Why Shop With Us?</h3>
          <div className="flex gap-3 items-start">
            <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png" className="w-6 h-6" alt="delivery" />
            <div><strong>Fast Delivery</strong><br />1-3 days across BD</div>
          </div>
          <div className="flex gap-3 items-start">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" className="w-6 h-6" alt="returns" />
            <div><strong>Easy Returns</strong><br />7-day free returns</div>
          </div>
          <div className="flex gap-3 items-start">
            <img src="https://cdn-icons-png.flaticon.com/512/3754/3754898.png" className="w-6 h-6" alt="deals" />
            <div><strong>Flash Sales</strong><br />Exclusive offers daily</div>
          </div>
        </div>
      </div>

      {/* === Flash Sale Section === */}
      <section className="mt-12">
        {/* Flash Sale Header with Countdown */}
        <div className="flex justify-between items-center border-b-4 border-red-600 pb-2">
          <span className="bg-red-600 text-white font-bold px-3 py-1 rounded">FLASH SALE</span>
          <CountdownTimer />
        </div>

        {/* Section Title & See All Link */}
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-lg font-semibold uppercase">Selling Now</h2>
          <Link to="/sale">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">See All</button>
          </Link>
        </div>

        {/* Flash Sale Products Grid (Only First 8 Shown) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-6">
          {flashSaleProducts.slice(0, 12).map(product => (
            <div key={product.id} className="bg-white rounded shadow p-3 hover:shadow-lg transition">
              <img src={product.image} alt={product.title} className="w-full h-36 object-cover rounded mb-2" />
              <h3 className="text-sm font-semibold truncate">{product.title}</h3>
              <div className="text-sm mb-2">
                <span className="line-through text-gray-400 mr-1">${product.list_price}</span>
                <span className="text-red-600 font-bold">${product.price}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-1 rounded text-sm hover:bg-red-700 transition">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* === Category Grid Section === */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold uppercase mb-8 text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map(({ id, name, img, link }) => (
            <Link to={link} key={id} className="block rounded overflow-hidden shadow hover:shadow-xl transform hover:scale-105 transition bg-white">
              <img src={img} alt={name} className="w-full h-32 object-cover" />
              <div className="text-center py-3 font-semibold text-gray-800">{name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
