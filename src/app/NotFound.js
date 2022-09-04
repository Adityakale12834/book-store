import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import notFound from "../assets/notFound.svg";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white text-indigo text-2xl text-center p-20 pt-48">
        404 (Not Found)
        <div className="flex justify-center items-center mt-6">
          <img src={notFound} alt="not found page" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
