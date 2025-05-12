import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Products from "../components/Products";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      {/* <Banner /> */}
      <Products />
      {/* <Pagination showSetPage={true} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
