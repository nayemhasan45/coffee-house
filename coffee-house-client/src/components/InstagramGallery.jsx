import React from "react";
import img1 from "../assets/images/cups/Rectangle 10.png";
import img2 from "../assets/images/cups/Rectangle 11.png";
import img3 from "../assets/images/cups/Rectangle 12.png";
import img4 from "../assets/images/cups/Rectangle 13.png";
import img5 from "../assets/images/cups/Rectangle 14.png";
import img6 from "../assets/images/cups/Rectangle 15.png";
import img7 from "../assets/images/cups/Rectangle 16.png";
import img8 from "../assets/images/cups/Rectangle 9.png";

const InstagramGallery = () => {
  const leftImages = [img1, img2, img3, img4];
  const rightImages = [img5, img6, img7, img8];

  return (
    <div className="relative w-full py-16 bg-white">
      {/* Center Title */}
      <h2 className="font-rancho text-[#331A15] text-2xl md:text-6xl font-semibold text-center pb-5 md:pb-10">
        Follow on Instagram
      </h2>

      {/* Image Grids */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-11/12 md:w-9/12 mx-auto">
        {/* Left Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {leftImages.map((img, index) => (
            <div
              key={index}
              className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Instagram ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {rightImages.map((img, index) => (
            <div
              key={index}
              className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Instagram ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramGallery;
