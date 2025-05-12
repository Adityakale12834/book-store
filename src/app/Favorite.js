import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, MinusIcon, HeartIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Favorite = () => {
  const { favorites, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (book, e) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleRemoveFromCart = (id, e) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleRemoveFromFavorites = (id, e) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div id="favorites" className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 my-24">
          <h2 className="text-2xl font-bold tracking-tight text-dark-gray">
            Your Favorite Books
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favorites.length ? (
              favorites.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-white px-4 py-2 rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition duration-300 border border-gray-200"
                  onClick={() => navigate(`/books/${book.id}`)}
                >
                  <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={book.formats["image/jpeg"]}
                      alt={book.title}
                      className="w-full h-full object-contain lg:w-full lg:h-full rounded-md bg-dark-gray"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-dark-gray font-semibold">
                        {book.title.split(":")[0]}
                      </h3>
                      {book.authors.map((author, i) => (
                        <p key={i} className="mt-1 text-sm text-dark-indigo">
                          {author.name}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-col justify-center items-end ml-5 space-y-2">
                      <button
                        className="inline-flex items-center px-2 py-2 rounded-full bg-green-600 text-sm font-medium text-white hover:bg-green-800"
                        onClick={(e) => handleAddToCart(book, e)}
                      >
                        <span className="sr-only">Add to cart</span>
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        className="inline-flex items-center px-2 py-2 rounded-full bg-red-600 text-sm font-medium text-white hover:bg-red-800"
                        onClick={(e) => handleRemoveFromFavorites(book.id, e)}
                      >
                        <span className="sr-only">Remove from favorites</span>
                        <HeartIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex justify-center items-center">
                <p className="text-lg text-indigo">
                  You haven't added any books to favorites yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
