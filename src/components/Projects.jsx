import React from "react";
import { motion } from "framer-motion";
import { assets, projectsData, companyLogos } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="Projects"
      className={`container mx-auto px-4 sm:px-10 lg:px-32 py-16 ${
        !isHome ? "pt-50" : ""
      }`}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 text-xl sm:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
        We specialize in basement excavation. Our expertise extends to a wide
        range of projects, including the following residential and commercial
        buildings for industrial, institutional, and developmental projects. Our
        commitment to quality and safety ensures that every project is completed
        to the highest standards. Our projects span across various sectors,
        showcasing our expertise in handling diverse construction challenges.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-15">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 cursor-pointer flex flex-col"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-5 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 mt-auto">
                {project.price} {project.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-2xl sm:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
        During the past 30 years, we have worked with some of the most
        prestigious <span className="font-bold">companies</span> in the
        industry, including{" "}
        <span className="text-gray-400">
          PSP Projects Ltd., HV Infrabuild Pvt. Ltd.
        </span>
        , and many more. Several other companies are listed below.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center mt-8">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="w-32 h-20 sm:w-36 sm:h-24 flex items-center justify-center bg-gray-50 rounded-md shadow-sm"
          >
            <img
              src={logo.image}
              alt={`Company Logo ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
