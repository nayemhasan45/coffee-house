import React from "react";
import bg from "../assets/images/more/1.png";
import bgB from "../assets/images/more/5.png";
import { Link } from "react-router";
import CoffeeCard from "./CoffeeCard";

const AddCoffeeCom = ({ coffees,handleDeleteParent }) => {
  return (
    <div
      className="relative bg-cover bg-no-repeat my-16 md:my-24"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Bottom background image */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgB})`,
          backgroundPosition: "bottom",
        }}
      ></div>

      <div className="relative w-11/12 mx-auto">
        <div className="text-center space-y-5">
          <p className="font-raleway text-xl">--- Sip & Savor ---</p>
          <h1 className="font-rancho text-[#331A15] text-2xl md:text-6xl font-semibold">
            Our Popular Products
          </h1>
          <Link to={"/add-coffe"}>
            <button className="bg-[#E3B577] font-rancho hover:text-white text-gray-900 font-semibold px-8 py-3 rounded-md transition-colors duration-300">
              Add Coffee
            </button>
          </Link>
        </div>

        {/* Coffee cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-2 md:mt-10 relative z-10">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} handleDeleteParent={handleDeleteParent} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCoffeeCom;
