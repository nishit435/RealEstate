import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ${
        !isHome ? "pt-32" : ""
      }`}
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        From those who found a home with us
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id || index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-b-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

            <div className="flex justify-center gap-1 mb-4 text-red-500">
              {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                <img key={starIndex} src={assets.star_icon} alt="Star" />
              ))}
            </div>

            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
