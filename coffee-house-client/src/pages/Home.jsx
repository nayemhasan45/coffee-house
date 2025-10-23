import React, { useState } from "react";
import bg from "../assets/images/more/6.jpeg";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AddCoffeeCom from "../components/AddCoffeeCom";
import { useLoaderData } from "react-router";
import InstagramGallery from "../components/InstagramGallery";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(initialCoffees);
  // console.log(coffees);  
  const handleDeleteParent =(id)=>{
    setCoffees(coffees.filter(coffee=>coffee._id!==id));
  }
  return (
    <div>
      <HeroSection bg={bg} />
      <FeaturesSection></FeaturesSection>
      <AddCoffeeCom key={coffees._id} handleDeleteParent={handleDeleteParent} coffees={coffees}></AddCoffeeCom>
      <InstagramGallery></InstagramGallery>
    </div>
  );
};

export default Home;
