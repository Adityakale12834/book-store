import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../actions/products";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Loader from "./Loader";

// SVG Icons
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
      strokeWidth={2}
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
      strokeWidth={2}
      d="M20 12H4"
    />
  </svg>
);

const ShoppingCartIcon = () => (
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
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export default function Products() {
  const { books, isLoading } = useSelector((state) => state.books);
  const { cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBooks(1));
  }, [dispatch]);

  const handleAddToCart = (book, e) => {
    e.stopPropagation();
    // Use the book with pre-assigned prices from state
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity: newQuantity },
    });
  };

  const isInCart = (id) => cart.some((item) => item.id === id);
  const getQuantity = (id) =>
    cart.find((item) => item.id === id)?.quantity || 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Explore our carefully curated collection of timeless classics and
            modern masterpieces
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Collection</h2>
          <div className="relative">
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center text-gray-700 hover:text-indigo-600"
            >
              <ShoppingCartIcon className="h-6 w-6 mr-1" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>

        {/* Book Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.length ? (
              books.map((book) => {
                const quantity = getQuantity(book.id);

                return (
                  <div
                    key={book.id}
                    className="bg-white hover:scale-105 transition ease-in-out border p-1 rounded-xl shadow-md overflow-hidden hover:shadow-xl duration-300 group"
                  >
                    {/* Book Cover */}
                    <div
                      className="relative h-64 overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/books/${book.id}`)}
                    >
                      <img
                        src={book.formats["image/jpeg"]}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg hover:rounded-lg transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {quantity > 0 && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {quantity} in cart
                        </div>
                      )}
                    </div>

                    {/* Book Details */}
                    <div className="p-4">
                      <h3
                        className="text-lg font-bold text-gray-900 mb-1 truncate cursor-pointer"
                        onClick={() => navigate(`/books/${book.id}`)}
                      >
                        {book.title.split(":")[0]}
                      </h3>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {book.authors.slice(0, 2).map((author, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
                          >
                            {author.name}
                          </span>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="text-lg font-bold text-indigo-600 mb-3">
                        ₹{book.priceINR}{" "}
                        <span className="text-xs text-gray-500">
                          (${book.priceUSD})
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        {quantity > 0 ? (
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(book.id, quantity - 1);
                              }}
                              className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </button>
                            <span className="font-medium">{quantity}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(book.id, quantity + 1);
                              }}
                              className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(book, e);
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white bg-midnight rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No books found
                </h3>
                <p className="mt-1 text-gray-500">
                  We couldn't find any books matching your criteria.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <AboutUs />
      <Footer />
    </div>
  );
}
