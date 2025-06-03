import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <div
      className={`top-0 left-0 w-full z-50 ${
        isHome ? "absolute text-white" : "fixed bg-white text-black shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <img
          src={assets.mlogo}
          className="w-[160px] h-[60px] md:w-[320px] md:h-[120px] drop-shadow-md object-contain"
          alt="Logo"
        />

        {/* Nav Links */}
        <ul className="hidden md:flex gap-7 items-center">
          <Link to="/" className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <Link to="/projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link to="/services" className="cursor-pointer hover:text-gray-400">
            Services
          </Link>
          <Link
            to="/testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </Link>
          {/* Reach Us Button */}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 rounded-full text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700"
          >
            Reach us out
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white text-black transition-all z-40`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close"
          />
        </div>
        <ul className="flex flex-col gap-2 justify-center items-center mt-5 px-5 text-lg font-medium">
          <Link
            to="/"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2"
          >
            Projects
          </Link>
          <Link
            to="/testimonials"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2"
          >
            Testimonials
          </Link>
          <Link
            to="/services"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full mt-4"
          >
            Reach us out
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
