import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <Navbar isHome={false} />

      <div className="pt-[100px]">
        <Services />
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
