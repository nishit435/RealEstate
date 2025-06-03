import React from "react";
import { assets } from "../assets/assets";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline"; // You can switch to solid if preferred
import { FaInstagram } from "react-icons/fa"; // Instagram icon from react-icons

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo + Slogan */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.svemt} alt="Logo" className="w-[200px] h-auto" />
          <p className="text-gray-400 mt-4">Build tomorrow, Today.</p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>

        {/* Contact + Social Links */}
        <div className="w-full md:w-1/3 text-gray-400">
          <h3 className="text-white text-lg font-bold mb-4">Get in Touch</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-500 w-5 h-5" />
              <a
                href="https://instagram.com/siddhivinayak_emt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                @siddhivinayak_emt
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              <a
                href="mailto:yourmail@example.com"
                className="hover:text-white"
              >
                yourmail@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              <a href="tel:+919979898297" className="hover:text-white">
                +91 9979 8982 97/98
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © All rights reserved Nishit
      </div>
    </div>
  );
};

export default Footer;
