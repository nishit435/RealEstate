import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Add padding to prevent overlap */}
      <div className="pt-[100px]">
        <About />
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
