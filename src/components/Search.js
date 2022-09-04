import { SearchIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getSearchingResults } from "../actions/products";

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchForBook = () => {
    const searchInputValue = document.getElementById("search").value.trim();
    if (searchInputValue) {
      navigate(`/search/${searchInputValue}`);
      dispatch(getSearchingResults(searchInputValue));
    }
  };

  const handleChange = (e) => {
    // keyCode: 13
    if (e.keyCode === 13) {
      searchForBook();
    }
  };

  return (
    <div className="relative">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 z-40 fixed top-20 left-0 right-0">
        <div className="mx-auto py-3 pt-6 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="bg-light-gray w-0 flex-1 flex items-center relative rounded-md overflow-hidden shadow-md">
              <input
                className="w-full p-2 pl-14 bg-inherit text-midnight text-lg border border-white hover:border hover:border-indigo focus:outline-none focus:ring focus:ring-indigo rounded-md"
                type="text"
                name="search"
                id="search"
                placeholder="Search by author, title, name"
                onKeyDown={(e) => handleChange(e)}
              />
              <div className="flex-shrink-0 absolute left-0 h-full w-12">
                <button
                  type="button"
                  className="flex w-full h-full bg-indigo hover:bg-dark-indigo items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={searchForBook}
                >
                  <span className="sr-only">Search</span>
                  <SearchIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
