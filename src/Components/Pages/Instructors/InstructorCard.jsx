import React from "react";

const InstructorCard = ({ instructor }) => {
  const { instructor_name, email, instructor_image } = instructor;
  return (
    <div className="bg-base-200 p-6 rounded border border-black">
      <img
        src={instructor_image}
        className="w-full h-52 md:h-56 lg:h-72 object-cover border border-black"
      />
      <p className="py-3 text-center text-lg font-semibold">
        {instructor_name}
      </p>
      <p className="text-center text-xl font-medium">{email}</p>
    </div>
  );
};

export default InstructorCard;
