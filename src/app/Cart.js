import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const { isLoading, cart } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_TO_CART", payload: id });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-dark-gray">
            Check Your Cart
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cart.length > 0 ? (
              cart.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-light-gray px-4 py-2 rounded-md shadow-md cursor-pointer"
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
                      <h3 className="text-sm text-dark-gray">
                        {book.title.split(":")[0]}
                      </h3>
                      {book.authors.map((author, i) => (
                        <p key={i} className="mt-1 text-sm text-indigo">
                          {author.name}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center items-end ml-5">
                      <button
                        className="inline-flex items-center px-2 py-2 rounded-full opacity-25 bg-green-600 text-sm font-medium text-white hover:bg-green-800 mb-2"
                        disabled
                      >
                        <span className="sr-only">Add to cart</span>
                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button
                        className="inline-flex items-center px-2 py-2 rounded-full bg-red-600 text-sm font-medium text-white hover:bg-red-800"
                        onClick={() => handleRemoveFromCart(book.id)}
                      >
                        <span className="sr-only">Remove from cart</span>
                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-indigo text-2xl text-center p-2">
                {" "}
                NO books added to the cart
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
