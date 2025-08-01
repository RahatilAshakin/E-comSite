import React from "react";
import { Link } from "react-router-dom";

const NavBarA = () => {
  return (
    <div className="bg-indigo-600 py-3 text-white">
      <div className="flex justify-between items-center px-4 lg:px-8 gap-4">
        {/* left Logo */}
        <div className="relative group">
          <Link
            to="/home"
            className="block hover:scale-105 transition-transform duration-200"
          >
            <img
              src="https://i.ibb.co/FbNB8GDs/Untitled-design-1.png"
              alt="Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
            />
          </Link>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs text-white bg-black/40 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
            Home
          </div>
        </div>

        {/* center Search Box */}
      <div className="relative w-40 md:w-64">
  <input
    type="text"
    placeholder="Search..."
    className="input input-sm w-full text-black rounded-full pl-4 pr-20 py-1 focus:outline-none focus:ring-2 focus:ring-white transition"
  />
  <button
    type="submit"
    className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-indigo-600 px-3 py-1 text-sm rounded-full hover:bg-indigo-100 transition z-10"
  >
    Search
  </button>
</div>


        {/* Right: Cart & Profile */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative group dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17a2 2 0 100 4 2 2 0 000-4zM9 19a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-white text-indigo-600">
                  8
                </span>
              </div>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs text-white bg-black/40 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
              Cart
            </div>
            <div
              tabIndex={0}
              className="dropdown-content mt-3 w-56 p-4 bg-white rounded-box shadow-lg z-10"
            >
              <p className="font-bold text-gray-800">8 Items</p>
              <p className="text-sm text-gray-500">Subtotal: $999</p>
              <Link
                to="/view-cart"
                className="btn btn-sm w-full mt-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all rounded"
              >
                View Cart
              </Link>
            </div>
          </div>

          {/* Profile */}
          <div className="relative group dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="User menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white rounded-full hover:text-indigo-200 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 0112 15c2.5 0 4.7 1 6.4 2.7M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs text-white bg-black/40 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all">
              Profile
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm mt-3 w-48 bg-white rounded-box shadow-lg z-10 p-2"
            >
              <li>
                <Link
                  to="/profile"
                  className="btn btn-sm bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition-all rounded"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="btn btn-sm bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition-all rounded"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="btn btn-sm bg-white text-indigo-600 font-semibold hover:bg-indigo-100 transition-all rounded"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarA;
