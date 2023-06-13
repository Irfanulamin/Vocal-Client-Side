import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { AiOutlineArrowRight } from "react-icons/ai";

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div className=" p-20">
      <h2 className="text-center text-3xl text-black mb-7">
        My Enrolled Classes
      </h2>
      {classes.map((classDetails) => (
        <div className="flex  flex-wrap  gap-20">
          {classDetails?.image.map((image) => (
            <div className="bg-base-200 p-3 border  border-black">
              <img
                src={image}
                className="h-44 w-full bg-base-200 border border-black"
              />
              <div className="py-3 px-2 flex justify-between items-center">
                <p>Start your journey</p>
                <div className="hover:bg-black p-2 rounded-full transition-all hover:text-white">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyEnrolledClasses;
