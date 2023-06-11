import React, { useState } from "react";
import { useEffect } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20">
      {instructors.map((instructor) => (
        <InstructorCard instructor={instructor}></InstructorCard>
      ))}
    </div>
  );
};

export default Instructors;
