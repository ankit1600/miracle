import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#128F8B] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Copyright Section */}
        <div className="mb-4">
          <p className="text-sm">
            &copy; 2023 Your Company. All rights reserved.
          </p>
        </div>

        {/* Other Important Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-36 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-white hover:text-gray-400">
                Facebook
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a href="/" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <p>Your Company</p>
            <p>123 Main Street</p>
            <p>City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
