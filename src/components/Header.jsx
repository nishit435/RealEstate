import React from "react";
import { motion } from "motion/react";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover flex items-center justify-center w-full overflow-hidden bg-gray-800 text-white"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-4 md:px-20 lg:px-32"
      >
        <h2 className="text-4xl sm: text-5xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Build Tomorrow, Today.
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded-full"
          >
            Projects
          </a>
          <a href="#Contact" className="bg-blue-600 px-8 py-3 rounded-full">
            Contact us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
