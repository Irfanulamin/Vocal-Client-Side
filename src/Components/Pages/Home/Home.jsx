import React from "react";
import Slider from "./Slider";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Review></Review>
    </div>
  );
};

export default Home;
