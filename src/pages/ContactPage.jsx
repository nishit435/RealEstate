import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <Navbar isHome={false} />
      <div className="pt-[104px]">
        {" "}
        {/* matches scroll-padding-top */}
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
