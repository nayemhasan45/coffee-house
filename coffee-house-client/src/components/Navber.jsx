import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const Navber = () => {
  return (
    <div className="py-4 flex items-center justify-center">
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full border-2 border-[#331A15] text-[#331A15] font-serif text-lg hover:bg-[#331A15] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <FaArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default Navber;
