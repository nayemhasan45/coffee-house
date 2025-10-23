import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/images/more/logo1.png";
import bg from '../assets/images/more/13.jpg';
import footer from "../assets/images/more/24.jpg";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="w-11/12 mx-auto ">
          {/* Main content container */}
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-20 ">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Logo and Title */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 md:w-14 md:h-14">
                  <img className="w-8 h-9 md:w-14 md:h-16" src={logo} alt="" />
                </div>
                <h1 className="font-serif text-[#331A15] text-3xl md:text-4xl lg:text-5xl font-normal">
                  Espresso Emporium
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-md">
                <p className="text-[#1B1A1A] text-base md:text-lg leading-relaxed">
                  Always ready to be your friend. Come & Contact with us to
                  share your memorable moments, to share with your best
                  companion.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#331A15] flex items-center justify-center hover:bg-[#4A2C1F] transition-colors">
                  <FaFacebook className="text-xl md:text-2xl text-white" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#331A15] flex items-center justify-center hover:bg-[#4A2C1F] transition-colors">
                  <FaXTwitter className="text-xl md:text-2xl text-white" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#331A15] flex items-center justify-center hover:bg-[#4A2C1F] transition-colors">
                  <FaInstagram className="text-xl md:text-2xl text-white" />
                </button>
                <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#331A15] flex items-center justify-center hover:bg-[#4A2C1F] transition-colors">
                  <FaLinkedin className="text-xl md:text-2xl text-white" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="font-serif text-[#331A15] text-2xl md:text-3xl lg:text-4xl font-normal">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-lg md:text-xl text-[#331A15] flex-shrink-0" />
                    <p className="text-[#1B1A1A] text-base md:text-lg">
                      +37062361058
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdEmail className="text-xl md:text-2xl text-[#331A15] flex-shrink-0" />
                    <p className="text-[#1B1A1A] text-base md:text-lg">
                      nayemhasan75907@gmail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaLocationDot className="text-lg md:text-xl text-[#331A15] flex-shrink-0 mt-1" />
                    <p className="text-[#1B1A1A] text-base md:text-lg">
                      Lithunia,Siaulia,Dubijos street 1B
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="space-y-6">
              <h2 className="font-serif text-[#331A15] text-3xl md:text-4xl lg:text-5xl font-normal mb-8">
                Connect with Us
              </h2>

              <div className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 md:py-4 rounded-md bg-white border border-gray-200 text-[#1B1A1A] placeholder-gray-400 focus:outline-none focus:border-[#331A15] transition-colors text-base md:text-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 md:py-4 rounded-md bg-white border border-gray-200 text-[#1B1A1A] placeholder-gray-400 focus:outline-none focus:border-[#331A15] transition-colors text-base md:text-lg"
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 md:py-4 rounded-md bg-white border border-gray-200 text-[#1B1A1A] placeholder-gray-400 focus:outline-none focus:border-[#331A15] transition-colors resize-none text-base md:text-lg"
                ></textarea>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-full border-2 border-[#331A15] text-[#331A15] font-serif text-lg md:text-xl hover:bg-[#331A15] hover:text-white transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{backgroundImage:`url(${footer})`}} className="py-3">
        <div className="text-center">
          <p className="text-white text-base md:text-lg font-serif">
            Copyright Espresso Emporium! All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
