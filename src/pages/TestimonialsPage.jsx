import React from "react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="pt-[100px]">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
