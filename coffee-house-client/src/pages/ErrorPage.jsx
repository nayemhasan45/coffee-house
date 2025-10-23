import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navber from '../components/Navber';
import notFound from "../assets/images/404/404.gif";

const ErrorPage = () => {
    return (
        <div>
            <Header />
            <Navber />
            
            {/* Error Content Section */}
            <div className="min-h-[60vh] flex items-center justify-center py-12 md:py-16 lg:py-20 ">
                <div className="w-11/12 mx-auto max-w-4xl">
                    <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                        
                        {/* 404 Image */}
                        <div className="w-full max-w-md lg:max-w-lg">
                            <img 
                                className="w-full h-auto object-contain" 
                                src={notFound} 
                                alt="404 Page Not Found" 
                            />
                        </div>
                        
                        {/* Error Message */}
                        <div className="space-y-4">
                            <h1 className="font-serif text-[#331A15] text-4xl md:text-5xl lg:text-6xl font-bold">
                                Oops! Page Not Found
                            </h1>
                            <p className="text-[#1B1A1A] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                The page you're looking for seems to have gone for a coffee break. 
                                Let's get you back to something delicious!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default ErrorPage;