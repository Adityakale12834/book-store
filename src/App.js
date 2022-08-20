import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./app/Home";
import Loader from "./components/Loader";
import Family from "./app/Family";
import Science from "./app/Science";
import History from "./app/History";
import Story from "./app/Story";
import Sport from "./app/Sport";
import Bestseller from "./app/Bestseller";
import Favorite from "./app/Favorite";
import Cart from "./app/Cart";
import About from "./app/About";
import Blog from "./app/Blog";
import NotFound from "./app/NotFound";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/categories">
            <Route path="sciences" element={<Science />} />
            <Route path="families" element={<Family />} />
            <Route path="history" element={<History />} />
            <Route path="stories" element={<Story />} />
            <Route path="sport" element={<Sport />} />
          </Route>

          <Route exact path="/bestseller" element={<Bestseller />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/books/:id" element={<Product />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
