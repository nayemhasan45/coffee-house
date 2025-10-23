import React from 'react';
import { Coffee, Award, Leaf, Flame } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
    {
      icon: <Coffee className="w-12 h-12 text-[#331A15]" />,
      title: "Awesome Aroma",
      description: "You will definitely be a fan of the design & aroma of your coffee"
    },
    {
      icon: <Award className="w-12 h-12 text-[#331A15]" />,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality"
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#331A15]" />,
      title: "Pure Grades",
      description: "The coffee is made of the green coffee beans which you will love"
    },
    {
      icon: <Flame className="w-12 h-12 text-[#331A15]" />,
      title: "Proper Roasting",
      description: "Your coffee is brewed by first roasting the green coffee beans"
    }
  ];
    return (
        <div className="bg-stone-100 py-16 md:py-24 ">
      <div className="  w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 ">
                {feature.icon}
              </div>
              <h3 className="text-xl font-rancho md:text-2xl font-semibold text-[#331A15] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-raleway">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default FeaturesSection;