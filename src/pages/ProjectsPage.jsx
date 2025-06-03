import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="pt-[100px]">
        <Projects />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
