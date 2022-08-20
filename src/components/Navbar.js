import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  BookOpenIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import logo from "../assets/book.svg";
import { useSelector } from "react-redux";

const category = [
  {
    name: "Families",
    description: "Get a list of books that suits all family member.",
    href: "/categories/families",
  },
  {
    name: "Sciences",
    description:
      "Speak to world using our highest rated books for all kind of sciences.",
    href: "/categories/sciences",
  },
  {
    name: "Sport",
    description: "Whatever you favorite sport we get you covered!",
    href: "/categories/sport",
  },
  {
    name: "History",
    description:
      "Collection of the most interesting topics about ancient history.",
    href: "/categories/history",
  },
  {
    name: "Stories",
    description: "Enjoy with most successful stories around the world.",
    href: "/categories/stories",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { cart } = useSelector((state) => state.books);

  return (
    <Popover className="relative bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-light-gray py-6 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-md-gray hover:text-dark-gray hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Link to="/" className="nav-links nav-circle">
              Home
            </Link>
            <Link to="/bestseller" className="nav-links nav-circle">
              Bestseller
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-dark-gray" : "text-md-gray",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-indigo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo"
                    )}
                  >
                    <span>Categories</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-md-gray" : "text-light-gray",
                        "ml-2 h-5 w-5 group-hover:text-dark-gray"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-midnight ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {category.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-light-gray"
                            >
                              <BookOpenIcon
                                className="flex-shrink-0 h-6 w-6 text-indigo"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-dark-gray">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-md-gray">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/about" className="nav-links nav-circle">
              Find a store
            </Link>
            <Link to="/blog" className="nav-links nav-circle">
              Blog
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/Favorite"
              className="whitespace-nowrap text-base font-medium text-md-gray hover:text-indigo"
            >
              <HeartIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              to="/cart"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo hover:bg-dark-indigo"
            >
              {cart.length}
            </Link>
            <button
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center text-base font-medium text-md-gray hover:text-indigo"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and tablet view  */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-midnight ring-opacity-5 bg-white divide-y-2 divide-light-gray">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={logo} alt="logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-md-gray hover:text-dark-gray hover:bg-light-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {category.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-light-gray"
                    >
                      <BookOpenIcon
                        className="flex-shrink-0 h-6 w-6 text-indigo"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-dark-gray">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/" className="nav-links">
                  Home
                </Link>

                <Link to="/bestseller" className="nav-links">
                  Bestseller
                </Link>
                <Link to="/about" className="nav-links">
                  Find a store
                </Link>
                <Link to="/blog" className="nav-links">
                  Blog
                </Link>
              </div>
              <div className="flex lg:hidden items-center justify-left md:flex-1 lg:w-0 pt-4">
                <Link
                  to="/Favorite"
                  className="whitespace-nowrap text-base font-medium text-md-gray hover:text-indigo"
                >
                  <HeartIcon
                    className="flex-shrink-0 h-6 w-6"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/cart"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo hover:bg-dark-indigo"
                >
                  {cart.length}
                </Link>
                <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center text-base font-medium text-md-gray hover:text-indigo">
                  EN
                </button>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
