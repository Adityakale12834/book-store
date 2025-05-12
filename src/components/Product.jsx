// import {
//   PlusIcon,
//   MinusIcon,
//   ArrowTopRightOnSquareIcon,
//   HeartIcon,
//   ArrowLeftIcon,
// } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBook } from "../actions/products";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

// Helper function to generate random price and convert to INR
const generateBookPrices = (book) => {
  const priceUSD = (Math.random() * (20 - 5) + 5).toFixed(2); // Random price between $5-$20
  const priceINR = (parseFloat(priceUSD) * 82.5).toFixed(2); // Convert to INR
  return { ...book, priceUSD, priceINR };
};

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14"
    />
  </svg>
);

const ArrowTopRightOnSquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { chosenBook, favorites } = useSelector((state) => state.books);
  const { cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pricedBook, setPricedBook] = useState(null);

  // Toggle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Fetch book
  useEffect(() => {
    dispatch(getSingleBook(id));
  }, [dispatch, id]);

  // Generate prices when book is loaded
  useEffect(() => {
    if (chosenBook) {
      // Only generate prices if not already present
      if (!chosenBook.priceUSD || !chosenBook.priceINR) {
        const bookWithPrices = generateBookPrices(chosenBook);
        setPricedBook(bookWithPrices);
      } else {
        setPricedBook(chosenBook);
      }
    }
  }, [chosenBook]);

  // Sync favorite state with Redux
  useEffect(() => {
    if (pricedBook) {
      setIsFavorite(favorites.some((item) => item.id === pricedBook.id));
    }
  }, [pricedBook, favorites]);

  const handleAddToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch({ type: "REMOVE_TO_CART", payload: id });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id, quantity: newQuantity },
      });
    }
  };

  const handleAddToFavorite = (book) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: book });
    setIsFavorite(true);
  };

  const handleRemoveFromFavorite = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
    setIsFavorite(false);
  };

  const toggleFavorite = (book) => {
    if (isFavorite) {
      handleRemoveFromFavorite(book.id);
    } else {
      handleAddToFavorite(book);
    }
  };

  const inCart = cart.some((item) => item.id === pricedBook?.id);
  const quantity =
    cart.find((item) => item.id === pricedBook?.id)?.quantity || 0;

  return (
    <div className="bg-gray-50 dark:bg-midnight min-h-screen my-12">
      {/* Dark Mode Toggle */}
      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 bg-indigo text-white dark:bg-dark-indigo rounded-full hover:bg-indigo-700 dark:hover:bg-indigo transition-colors"
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div> */}

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 dark:text-indigo hover:text-indigo-800 dark:hover:text-indigo-200 mb-6 transition-colors font-medium my-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to results
        </button>

        {pricedBook ? (
          <div className="bg-white dark:bg-dark-gray rounded-xl shadow-lg dark:shadow-none dark:border dark:border-md-gray overflow-hidden">
            <div className="md:flex">
              {/* Book Cover */}
              <div className="md:w-1/3 p-8 bg-gray-100 dark:bg-midnight flex items-center justify-center relative">
                <div className="relative group">
                  <img
                    src={
                      pricedBook.formats["image/jpeg"] ||
                      "https://via.placeholder.com/300x450?text=No+Cover"
                    }
                    alt={pricedBook.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 rounded-lg transition-opacity duration-300" />
                  <button
                    onClick={() => toggleFavorite(pricedBook)}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                      isFavorite
                        ? "bg-red-500 text-white"
                        : "bg-white dark:bg-md-gray text-gray-400 dark:text-light-gray"
                    } shadow-md hover:bg-red-100 dark:hover:bg-red-900 transition-colors z-10`}
                  >
                    <HeartIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    {pricedBook.title}
                  </h1>
                  <div className="flex flex-wrap items-center mb-4 gap-3">
                    {pricedBook.authors.map((author, i) => (
                      <span
                        key={i}
                        className="text-lg text-indigo-600 dark:text-indigo-200 font-medium"
                      >
                        {author.name}
                      </span>
                    ))}
                  </div>
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo mb-4">
                    ₹{pricedBook.priceINR}{" "}
                    <span className="text-sm text-gray-500 dark:text-light-gray">
                      (${pricedBook.priceUSD})
                    </span>
                  </div>

                  <div className="flex items-center mb-6 gap-4">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full">
                      {pricedBook.languages.join(", ").toUpperCase()}
                    </span>
                    <span className="text-gray-500 dark:text-light-gray text-sm">
                      {pricedBook.download_count.toLocaleString()} downloads
                    </span>
                  </div>
                </div>

                {/* Book Metadata */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pricedBook.subjects.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-light-gray uppercase tracking-wider mb-3">
                        Subjects
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {pricedBook.subjects.slice(0, 5).map((subject, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 dark:bg-md-gray text-gray-800 dark:text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {pricedBook.bookshelves.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-light-gray uppercase tracking-wider mb-3">
                        Bookshelves
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {pricedBook.bookshelves.slice(0, 5).map((shelf, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 dark:bg-md-gray text-gray-800 dark:text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                          >
                            {shelf}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={pricedBook.formats["text/html"]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white bg-midnight bg-indigo-600 dark:bg-indigo hover:bg-indigo-700 dark:hover:bg-dark-indigo transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Read Online
                  </a>

                  {inCart ? (
                    <div className="flex-1 flex items-center justify-center space-x-4 bg-green-500 text-white rounded-lg">
                      <button
                        onClick={() =>
                          handleQuantityChange(pricedBook.id, quantity - 1)
                        }
                        className="p-2 bg-gray-200 dark:bg-md-gray rounded-full hover:bg-gray-300 dark:hover:bg-light-gray"
                      >
                        <MinusIcon className="h-5 w-5 text-gray-700 dark:text-white" />
                      </button>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(pricedBook.id, quantity + 1)
                        }
                        className="p-2 bg-gray-200 dark:bg-md-gray rounded-full hover:bg-gray-300 dark:hover:bg-light-gray"
                      >
                        <PlusIcon className="h-5 w-5 text-gray-700 dark:text-white" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(pricedBook)}
                      className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors"
                    >
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 bg-white dark:bg-dark-gray rounded-xl shadow-lg dark:shadow-none">
            <Loader />
          </div>
        )}
      </div>

      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
};

export default Product;
