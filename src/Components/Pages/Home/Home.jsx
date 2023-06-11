import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Service></Service>
    </div>
  );
};

export default Home;
