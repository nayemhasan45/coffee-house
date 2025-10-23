import React from "react";
import Navber from "../components/Navber";
import { useLoaderData } from "react-router";
import bg from "../assets/images/more/11.png";

const CoffeDeatils = () => {
  const coffeeData = useLoaderData();
  const { name, supplier, taste, category, details, photo, price } =
    coffeeData;

  console.log(coffeeData);
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navber></Navber>

        {/* Responsive Container */}
        <div className="bg-[#F4F3F0] w-11/12 mx-auto p-6 md:p-10 lg:py-40 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-10 lg:gap-40 mb-32 my-10 justify-center">

          {/* Flex Wrapper */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-40">

            {/* Image Section */}
            <div className="shrink-0">
              <img
                src={photo}
                alt={name}
                className="w-48 h-auto md:w-56 lg:w-60 rounded-lg shadow-md"
              />
            </div>

            {/* Text Details */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-rancho font-extrabold text-[#331A15] mb-4">
                Niceties
              </h2>
              <div className="space-y-2 text-gray-700 text-sm md:text-base">
                <p>
                  <span className="font-bold">Name:</span> {name}
                </p>
                <p>
                  <span className="font-bold">Supplier:</span> {supplier}
                </p>
                <p>
                  <span className="font-bold">Taste:</span> {taste}
                </p>
                <p>
                  <span className="font-bold">Category:</span> {category}
                </p>
                <p>
                  <span className="font-bold">Details:</span> {details}
                </p>
                <p>
                  <span className="font-bold">Price:</span> ${price}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDeatils;
