import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import backgroundVideo from "../assets/five.mp4";

const Header = () => {
  return (
    <div
      className="relative min-h-[100vh] mb-4 flex items-center justify-center w-full overflow-hidden text-white"
      id="Header"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4 md:px-20 lg:px-32"
      >
        <h2 className="text-4xl sm:text-5xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Build Tomorrow, Today.
        </h2>
      </motion.div>
    </div>
  );
};

export default Header;
