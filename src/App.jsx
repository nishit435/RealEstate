import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page: Header + Navbar + About + Contact + Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Other Pages: Navbar + Page Content + Footer */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/testimonials"
          element={
            <>
              <Navbar />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
