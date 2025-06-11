import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Services = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const services = [
    {
      title: "Soil Filling",
      description:
        "We provide expert soil filling solutions for residential and commercial sites, ensuring ground stability and compliance.",
      image: assets.filling,
    },
    {
      title: "Soil Excavation",
      description:
        "Our excavation services are precise and efficient, tailored for foundations, trenches, and site preparation.",
      image: assets.excavation,
    },
    {
      title: "Machinery Rental",
      description:
        "Get access to our fleet of high-performance machines for short- or long-term rental with professional support.",
      image: assets.rental,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.div
      id="Services"
      className={`container mx-auto py-10 px-4 lg:px-32 w-full ${
        isHome ? "pt-20" : "pt-52"
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
        Our{" "}
        <span className="underline decoration-2 font-medium underline-offset-4">
          Services
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 transition-all duration-500 h-[550px]">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(index)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white transition-all duration-500 flex-1 relative ${
                isActive ? "lg:flex-[3]" : "lg:flex-[1]"
              }`}
              style={{ minHeight: isActive ? "100%" : "auto" }}
            >
              <div className="relative w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <motion.div
                  layout
                  className={`relative z-10 p-6 text-white bg-black/50 h-full flex flex-col justify-end transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>
                  {isActive && (
                    <motion.p
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
