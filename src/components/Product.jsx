import {
  PlusIcon,
  MinusIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleBook } from "../actions/products";
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

const Product = () => {
  const { id } = useParams();
  const { isLoading, chosenBook } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBook(id));
  }, [dispatch, id]);

  const handleAddToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: book });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_TO_CART", payload: id });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {chosenBook ? (
            <div
              key={chosenBook.id}
              className="lg:w-1/2 lg:mx-auto group relative bg-light-gray px-4 py-2 rounded-md shadow-md cursor-pointer"
            >
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={chosenBook.formats["image/jpeg"]}
                  alt={chosenBook.title}
                  className="w-full h-full object-contain lg:w-full lg:h-full rounded-md bg-dark-gray"
                />
              </div>
              <div className="mt-6 flex flex-col items-start justify-center">
                <div className="mb-6 lg:mb-10">
                  <h3 className="text-sm text-dark-gray">{chosenBook.title}</h3>
                  {chosenBook.authors.map((author, i) => (
                    <p key={i} className="mt-1 text-sm text-indigo">
                      {author.name}
                    </p>
                  ))}
                </div>
                <div className="mb-6">
                  <div className="flex flex-row items-center justify-start mb-2 flex-wrap">
                    <h3 className="text-sm text-indigo">Languages:</h3>
                    <p className="text-dark-gray ml-4">
                      {chosenBook.languages.join("-").toUpperCase()}
                    </p>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-sm text-indigo">Bookshelves:</h3>
                    <ul className="list-disc ml-6">
                      {chosenBook.bookshelves.map((shelve, i) => (
                        <li key={i} className="mt-1 text-sm text-dark-gray">
                          {shelve}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-sm text-indigo">Subjects:</h3>
                    <ul className="list-disc ml-6">
                      {chosenBook.subjects.map((sub, i) => (
                        <li key={i} className="mt-1 text-sm text-dark-gray">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm font-medium text-midnight flex flex-row justify-center items-center mb-6 lg:mb-10">
                  <span className="text-sm text-indigo mr-4">
                    Download Count:
                  </span>
                  {chosenBook["download_count"]}
                </p>
                <div className="flex flex-row justify-start items-center mb-6 lg:mb-10">
                  <button
                    className="inline-flex items-center px-2 py-2 rounded-full bg-green-600 text-sm font-medium text-white hover:bg-green-800 mr-4"
                    onClick={() => handleAddToCart(chosenBook)}
                  >
                    <span className="sr-only">Add to cart</span>
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="inline-flex items-center px-2 py-2 rounded-full bg-red-600 text-sm font-medium text-white hover:bg-red-800"
                    onClick={() => handleRemoveFromCart(chosenBook.id)}
                  >
                    <span className="sr-only">Remove from cart</span>
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div>
                  <a
                    href={chosenBook.formats["text/html"]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-2 py-2 rounded-md bg-indigo text-sm font-medium text-white hover:bg-dark-indigo mb-2"
                  >
                    <span className="sr-only">check it out</span>
                    <p>Read Online</p>
                    <ExternalLinkIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>Waiting...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
