import { SearchIcon } from "@heroicons/react/outline";

export default function Search() {
  return (
    <div className="relative bg-white">
      <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 z-40">
        <div className="mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="bg-light-gray w-0 flex-1 flex items-center relative rounded-md overflow-hidden shadow-md">
              <input
                className="w-full p-2 pl-14 bg-inherit text-midnight text-lg outline-indigo border-none"
                type="text"
                name="search"
                id="search"
                placeholder="Search by author, title, name"
              />
              <div className="flex-shrink-0 absolute left-0 h-full w-12">
                <button
                  type="button"
                  className="flex w-full h-full bg-indigo hover:bg-dark-indigo items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
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
