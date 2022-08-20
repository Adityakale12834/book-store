import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNextOrPrevBooks, getBooks } from "../actions/products";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);

  let { nextPage, prevPage, count } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handlePagination = (isIncrement) => {
    if (isIncrement) {
      nextPage && dispatch(getNextOrPrevBooks(nextPage));
    } else {
      prevPage && dispatch(getNextOrPrevBooks(prevPage));
    }
  };

  useEffect(() => {
    if (nextPage) {
      let page = Number(nextPage.split("=")[1]);
      setCurrentPage(--page);
    }
  }, [nextPage]);

  const goToPage = () => {
    const pageValue = Number(document.getElementById("page-num").value);
    dispatch(getBooks(pageValue));
  };

  return (
    <div className="relative bg-white">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-8 pt-16">
        <div className="flex-1 flex justify-between lg:hidden">
          <button
            className="relative inline-flex items-center px-4 py-2 border border-md-gray text-sm font-medium rounded-md text-midnight bg-white hover:bg-light-gray"
            onClick={() => handlePagination(false)}
          >
            Previous
          </button>
          <button
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-md-gray text-sm font-medium rounded-md text-midnight bg-white hover:bg-light-gray"
            onClick={() => handlePagination(true)}
          >
            Next
          </button>
        </div>
        <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
          {currentPage ? (
            <div>
              <p className="text-sm text-indigo">
                Showing{" "}
                <span className="font-medium">
                  {currentPage === 1 ? 1 : (currentPage - 1) * 32}
                </span>{" "}
                to <span className="font-medium">{currentPage * 32}</span> of{" "}
                <span className="font-medium">{count - currentPage * 32}</span>{" "}
                results
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-indigo">Waiting for data...</p>
            </div>
          )}
          <div className="flex justify-center items-center">
            <label htmlFor="page-num" className="mr-2">
              Set a page (between 1 and 2000):
            </label>
            <input
              type="number"
              name="pageNum"
              id="page-num"
              min="1"
              max="2000"
              className="px-2 py-2 rounded-l-sm border border-indigo bg-white text-sm font-medium text-midnight hover:bg-light-gray w-20"
            />
            <button
              className="inline-flex items-center px-2 py-2 rounded-r-sm border border-indigo bg-indigo text-sm font-medium text-white hover:bg-dark-indigo"
              onClick={goToPage}
            >
              <span className="sr-only">go to page</span>
              <PlusCircleIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-md-gray bg-white text-sm font-medium text-midnight hover:bg-light-gray"
                onClick={() => handlePagination(false)}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <div
                aria-current="page"
                className="z-10 bg-indigo border-indigo text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {currentPage}
              </div>
              <button
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-md-gray bg-white text-sm font-medium text-midnight hover:bg-light-gray"
                onClick={() => handlePagination(true)}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
