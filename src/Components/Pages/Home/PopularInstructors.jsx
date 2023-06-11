import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructor, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => b.students - a.students);
        const topInstructors = data.slice(0, 6);
        setInstructors(topInstructors);
      });
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold mb-12">
        Popular Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {instructor.map((instructorImage) => (
          <img
            src={instructorImage?.instructor_image}
            className="w-full h-72 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
