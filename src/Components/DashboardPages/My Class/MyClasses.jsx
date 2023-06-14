import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/pendingClasses?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const reversedClasses = [...classes].reverse();

  return (
    <>
      <div>
        <div className="overflow-x-auto p-4">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Instructor</td>
                <td>Status</td>
                <td>Total Enrolled</td>
                <td>Feedback</td>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reversedClasses.map((classDetails, index) => (
                <tr key={classDetails?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={classDetails?.class_image}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td>
                    <span className="text-base  font-semibold">
                      {classDetails?.class_name}
                    </span>
                  </td>
                  <td>
                    <span className="text-base text-green-600  font-semibold">
                      {classDetails?.price}$
                    </span>
                  </td>
                  <td>
                    <span className="text-base  font-semibold">
                      {classDetails?.instructor_name}
                    </span>
                  </td>
                  <td>
                    <span className="text-base text-blue-600 font-semibold">
                      {classDetails?.status}
                    </span>
                  </td>
                  <td>0</td>
                  <td>
                    {classDetails?.feedback ? (
                      <p className="text-green-600 font-semibold p-4">
                        {classDetails?.feedback}
                      </p>
                    ) : (
                      <></>
                    )}
                  </td>
                  {/* //put */}
                  <td>
                    <Link
                      to={`/dashboard/updateSingleClass/${classDetails?._id}`}
                      className="p-2 bg-yellow-500 text-white font-semibold hover:bg-transparent hover:text-yellow-400 transition-all rounded"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
