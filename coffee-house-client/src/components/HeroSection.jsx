import React from 'react';

const HeroSection = ({bg}) => {
    return (
        <div 
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-rancho md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-lg md:text-xl font-raleway text-gray-200 mb-8 leading-relaxed">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment. Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] font-rancho hover:bg-amber-600 hover:text-white text-gray-900 font-semibold px-8 py-3 rounded-md transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;