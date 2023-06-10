import React, { useState } from "react";
import { useEffect } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">
      {instructors.map((instructor) => (
        <InstructorCard instructor={instructor}></InstructorCard>
      ))}
    </div>
  );
};

export default Instructors;
