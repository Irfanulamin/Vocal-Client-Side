import React, { useEffect, useState } from "react";
import img1 from "../../../assets/popularClasses/1.jpg";
import img2 from "../../../assets/popularClasses/2.jpg";
import img3 from "../../../assets/popularClasses/3.jpg";
import img4 from "../../../assets/popularClasses/4.jpg";
import img5 from "../../../assets/popularClasses/5.jpg";
import img6 from "../../../assets/popularClasses/6.jpg";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => b.students - a.students);
        const topClasses = data.slice(0, 6);
        setClasses(topClasses);
      });
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold mb-12">Popular Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {classes.map((classDetails) => (
          <img
            src={classDetails?.class_image}
            className="w-full h-72 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
