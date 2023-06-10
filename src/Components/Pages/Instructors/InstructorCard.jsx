import React from "react";

const InstructorCard = ({ instructor }) => {
  const { instructor_name, email, instructor_image } = instructor;
  return (
    <div className="bg-base-200 p-6 rounded">
      <img src={instructor_image} />
      <p>{instructor_name}</p>
      <p>{email}</p>
    </div>
  );
};

export default InstructorCard;
