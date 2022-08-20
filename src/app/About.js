import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white text-indigo text-2xl text-center p-20">
        About
      </div>
      <Footer />
    </div>
  );
};

export default About;
