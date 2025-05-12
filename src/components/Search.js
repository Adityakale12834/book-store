import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchingResults } from "../actions/products";

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const searchForBook = () => {
    const query = searchQuery.trim();
    if (query) {
      setShowSuggestions(false);
      navigate(`/search/${query}`);
      dispatch(getSearchingResults(query));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchForBook();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchRef.current.focus();
    setShowSuggestions(false);
  };

  useEffect(() => {
    // Add animation class on mount
    const timer = setTimeout(() => {
      searchRef.current?.classList.add("animate-fade-in");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-white shadow-sm backdrop-blur-sm bg-opacity-90 my-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          ref={searchRef}
          className={`relative max-w-2xl mx-auto transition-all duration-200 opacity-0 rounded-lg bg-white border border-gray-200`}
        >
          <div className="flex items-center px-3 py-2">
            <div className="text-gray-400 pl-2">
              <SearchIcon className="h-5 w-5" />
            </div>
            <input
              className="flex-1 ml-2 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 focus:outline-none text-base py-2"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(searchQuery.length > 0);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsFocused(false);
                  setShowSuggestions(false);
                }, 200);
              }}
              placeholder="Search books, authors, or topics..."
              ref={searchRef}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
              >
                <XIcon className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={searchForBook}
              disabled={!searchQuery.trim()}
              className={`ml-2 px-4 py-2 rounded-md transition-all bg-blue-700`}
            >
              Search
            </button>
          </div>

          {/* Search suggestions */}
          {showSuggestions && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-b-lg border border-gray-200 max-h-80 overflow-y-auto">
              <div
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                onClick={() => {
                  setSearchQuery(searchQuery);
                  searchForBook();
                }}
              >
                <p className="font-medium text-gray-900">
                  Search for "{searchQuery}"
                </p>
                <p className="text-sm text-gray-500">in all books</p>
              </div>
              {/* Additional suggestions can be added here */}
              <div className="px-4 py-2 text-sm text-gray-500 text-center">
                Try: "Science fiction", "History", or "Biography"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
