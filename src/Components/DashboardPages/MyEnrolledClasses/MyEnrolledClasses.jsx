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

  const reversedClasses = [...classes].reverse();
  return (
    <div className=" p-20">
      <h2 className="text-center text-3xl text-black mb-7">
        My Enrolled Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {reversedClasses.map((classDetails) => (
          <div
            key={classDetails?._id}
            className="bg-base-200 p-3 border  border-black"
          >
            <img
              src={classDetails?.image}
              className="h-44 w-full bg-base-200 border border-black"
            />
            <div className="py-3 px-2 flex justify-between items-center">
              <div>
                <p className="text-wide text-lg font-semibold">
                  {classDetails?.itemName}
                </p>
                <p className="text-sm">Start your journey</p>
              </div>
              <div className="hover:bg-black p-2 rounded-full transition-all hover:text-white">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
