import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavBarB = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
    { name: "Dresses", href: "/dresses" },
    { name: "Tops", href: "/tops" },
    { name: "Bottoms", href: "/bottoms" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto rounded-b-lg bg-blue-600 text-white">
      <div className="navbar px-4 flex justify-between items-center">
        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Links container (desktop) */}
        <div className="hidden md:flex flex-1 flex-wrap justify-between items-center font-semibold text-sm lg:text-base">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 mt-2 flex flex-col gap-2 font-semibold text-white">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBarB;
