import React, { useState } from "react";
import { useEffect } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://server-side-sand-omega.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <>
      {instructors.length === 0 && (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-20">
        {instructors.map((instructor) => (
          <InstructorCard instructor={instructor}></InstructorCard>
        ))}
      </div>
    </>
  );
};

export default Instructors;
