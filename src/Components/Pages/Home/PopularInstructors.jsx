import React from "react";
import img1 from "../../../assets/popularInstructors/1.jpg";
import img2 from "../../../assets/popularInstructors/2.jpg";
import img3 from "../../../assets/popularInstructors/3.jpg";
import img4 from "../../../assets/popularInstructors/4.jpg";
import img5 from "../../../assets/popularInstructors/5.jpg";
import img6 from "../../../assets/popularInstructors/6.jpg";

const PopularInstructors = () => {
  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold mb-12">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <img src={img1} className="w-full h-72 object-cover" />
        <img src={img2} className="w-full h-72 object-cover" />
        <img src={img3} className="w-full h-72 object-cover" />
        <img src={img4} className="w-full h-72 object-cover" />
        <img src={img5} className="w-full h-72 object-cover" />
        <img src={img6} className="w-full h-72 object-cover" />
      </div>
    </div>
  );
};

export default PopularInstructors;
