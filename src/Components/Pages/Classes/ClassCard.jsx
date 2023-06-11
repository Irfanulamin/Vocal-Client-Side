import React from "react";

const ClassCard = ({ classDetails, handleSelect }) => {
  const {
    _id,
    class_name,
    class_image,
    class_price,
    available_seats,
    students,
    instructor_name,
  } = classDetails;
  return (
    <div className="bg-base-200 p-6 border border-black">
      <img
        src={class_image}
        className="w-full h-52 md:h-56 lg:h-72 object-cover border border-black"
      />
      <p className="py-1 text-center text-lg font-semibold">{class_name}</p>
      <p className="text-center text-xl font-medium">{instructor_name}</p>
      <p className="text-base font-semibold">
        Students: <span className="font-medium">{students}</span>
      </p>
      <p className="text-base font-semibold">
        Available Seats: <span className="font-medium">{available_seats}</span>
      </p>
      <p className="text-base font-semibold">
        Price: <span className=" text-green-600">{class_price}$</span>
      </p>
      <button
        onClick={() => handleSelect(_id)}
        className="w-full bg-yellow-500 my-2 py-2 tracking-widest font-medium  text-xl hover:bg-black text-white transition"
      >
        Select
      </button>
    </div>
  );
};

export default ClassCard;
