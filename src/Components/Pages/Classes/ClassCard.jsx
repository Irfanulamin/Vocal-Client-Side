import React, { useEffect, useState } from "react";
import useAdmin from "../../../PrivateRoutes/useAdmin";
import useInstructor from "../../../PrivateRoutes/useInstructor";

const ClassCard = ({ classDetails, handleSelect }) => {
  const [disable, setDisable] = useState(false);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [background, setBackgroundColor] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      setDisable(true);
      console.log(true);
    } else if (isInstructor) {
      setDisable(true);
      console.log(true);
    }
  }, [isAdmin, isInstructor]);

  const handleBothClicks = (id) => {
    handleSelect(id);
    setDisable(true);
  };

  const {
    _id,
    class_name,
    class_image,
    class_price,
    available_seats,
    students,
    instructor_name,
  } = classDetails;

  useEffect(() => {
    if (classDetails?.available_seats === 0) {
      setDisable(true);
      setBackgroundColor(true);
    }
  }, [classDetails?.available_seats]);
  return (
    <div
      className={`${
        background ? "bg-red-500" : "bg-base-200"
      } p-6 border border-black`}
    >
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
        onClick={() => handleBothClicks(_id)}
        className={`${
          disable
            ? "btn-disabled bg-slate-200 text-slate-400"
            : "bg-yellow-500 hover:bg-black"
        } btn w-full  my-2 py-2 tracking-widest font-medium  text-xl  text-white transition`}
      >
        Select
      </button>
    </div>
  );
};

export default ClassCard;
