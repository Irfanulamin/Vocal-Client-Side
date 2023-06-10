import React from "react";

const ClassCard = ({ classDetails }) => {
  const {
    class_name,
    class_image,
    class_price,
    available_seats,
    students,
    instructor_name,
  } = classDetails;
  return (
    <div className="bg-base-200 p-6 rounded">
      <img src={class_image} />
      <p>{class_name}</p>
      <p>{class_price}</p>
      <p>{available_seats}</p>
      <p>{students}</p>
      <p>{instructor_name}</p>
    </div>
  );
};

export default ClassCard;
