import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-white text-indigo text-2xl text-center p-20">
        Blog
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
