import React from "react";
import circles from "../assets/circles.svg";

const Loader = () => {
  return (
    <div className="w-full h-48 flex justify-center items-center">
      <button
        type="button"
        className="bg-indigo-500 flex flex-col justify-center items-center"
        disabled
      >
        <img
          src={circles}
          alt="spinner"
          className="animate-spin h-12 w-12 mr-3 mb-4"
          viewBox="0 0 24 24"
        />
        Processing...
      </button>
    </div>
  );
};

export default Loader;
