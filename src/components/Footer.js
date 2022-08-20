import React from "react";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import copyright from "../assets/copyright.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-start">
        <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:justify-evenly">
          <div className="flex flex-col justify-center items-center mb-6">
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              About us
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Feedback
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Community
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-6">
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Trust, Safety & Security
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Terms of Service
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Help & Support
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Accessibility
            </p>
            <p className="text-md text-midnight hover:text-indigo hover:underline cursor-pointer">
              Cookie Policy
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full my-8">
          <p className="text-md text-dark-gray">Follow us</p>
          <div className="flex flex-row justify-center items-center">
            <Link to="/">
              <img
                src={facebook}
                className="object-cover h-10 w-10 mx-2 grayscale hover:grayscale-0"
                alt="facebook account"
              />
            </Link>
            <Link to="/">
              <img
                src={linkedin}
                className="object-cover h-10 w-10 mx-2 grayscale hover:grayscale-0"
                alt="facebook account"
              />
            </Link>
            <Link to="/">
              <img
                src={twitter}
                className="object-cover h-10 w-10 mx-2 grayscale hover:grayscale-0"
                alt="facebook account"
              />
            </Link>
            <Link to="/">
              <img
                src={youtube}
                className="object-cover h-10 w-10 mx-2 grayscale hover:grayscale-0"
                alt="facebook account"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full mb-8 text-dark-gray">
          <img
            src={copyright}
            className="object-cover h-5 w-5"
            alt="facebook account"
          />{" "}
          <small>{year}</small> - <small>Ahmed Sanad</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
