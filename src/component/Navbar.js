import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#128F8B] p-4 lg:flex lg:justify-end">
      {/* Navbar for mobile screens */}
      <div className="block lg:hidden ">
        {/* Mobile menu button */}
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navbar for laptop screens */}
      <div className="hidden lg:flex lg:justify-end">
        {/* Add your laptop navbar items here */}
        <a href="/" className="text-white mr-4">
          Home
        </a>
        <a href="/" className="text-white mr-4">
          About
        </a>
        <a href="/" className="text-white mr-4">
          Products
        </a>
        <a href="/" className="text-white">
          Contact
        </a>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          {/* Mobile menu items */}
          <div className="flex flex-col items-center pt-20">
            <a href="/" className="text-white py-2" onClick={closeMobileMenu}>
              Home
            </a>
            <a href="/" className="text-white py-2" onClick={closeMobileMenu}>
              About
            </a>
            <a href="/" className="text-white py-2" onClick={closeMobileMenu}>
              Products
            </a>
            <a href="/" className="text-white py-2" onClick={closeMobileMenu}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
