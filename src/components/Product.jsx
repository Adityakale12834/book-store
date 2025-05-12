import {
  PlusIcon,
  MinusIcon,
  ExternalLinkIcon,
  HeartIcon,
  ArrowLeftIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBook } from "../actions/products";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { chosenBook } = useSelector((state) => state.books);
  const { cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(getSingleBook(id));
  }, [dispatch, id]);

  const handleAddToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_TO_CART", payload: id });
  };

  const handleAddToFavorite = (book) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: book });
  };

  const handleRemoveFromFavorite = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const inCart = cart.some((item) => item.id === chosenBook?.id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to results
        </button>

        {chosenBook ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Book Cover */}
              <div className="md:w-1/3 p-8 bg-gray-100 flex items-center justify-center">
                <div className="relative group">
                  <img
                    src={
                      chosenBook.formats["image/jpeg"] ||
                      "https://via.placeholder.com/300x450?text=No+Cover"
                    }
                    alt={chosenBook.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => {
                      toggleFavorite();
                      handleAddToFavorite(chosenBook);
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                      isFavorite
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-400"
                    } shadow-md hover:bg-red-100 transition-colors`}
                  >
                    <HeartIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {chosenBook.title}
                  </h1>
                  <div className="flex flex-wrap items-center mb-4">
                    {chosenBook.authors.map((author, i) => (
                      <span key={i} className="text-lg text-indigo-600 mr-4">
                        {author.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center mb-6">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {chosenBook.languages.join(", ").toUpperCase()}
                    </span>
                    <span className="ml-4 text-gray-500">
                      {chosenBook.download_count.toLocaleString()} downloads
                    </span>
                  </div>
                </div>

                {/* Book Metadata */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chosenBook.subjects.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Subjects
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {chosenBook.subjects.slice(0, 5).map((subject, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {chosenBook.bookshelves.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Bookshelves
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {chosenBook.bookshelves.slice(0, 5).map((shelf, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
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
                    href={chosenBook.formats["text/html"]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-blue-900 bg-blue-700 hover:bg-blue-700 transition-colors border border-gray-400"
                  >
                    <ExternalLinkIcon className="h-5 w-5 mr-2" />
                    Read Online
                  </a>

                  {inCart ? (
                    <button
                      onClick={() => handleRemoveFromCart(chosenBook.id)}
                      className="flex-1 flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <MinusIcon className="h-5 w-5 mr-2" />
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(chosenBook)}
                      className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
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
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        )}
      </div>

      <Footer />
      {/* <AboutUs /> */}
    </div>
  );
};

export default Product;
