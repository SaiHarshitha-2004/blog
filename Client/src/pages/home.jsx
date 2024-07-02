import React from "react";
import Category from "./Category.jsx";

import Hero from "../HomeComponents/Hero.jsx"
import ChooseUs from "../HomeComponents/ChooseUs.jsx";
import About from "../HomeComponents/About.jsx";
import JoinCommunity from "../HomeComponents/JoinCommunity.jsx";



const Home = () => {
  return (
    <div>
      <Hero/>
      <ChooseUs />
      <About />
      <Category />
      <JoinCommunity />
    </div>
  );
};

export default Home;
