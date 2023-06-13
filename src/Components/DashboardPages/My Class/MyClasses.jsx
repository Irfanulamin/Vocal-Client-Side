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
  return (
    <>
      <div>
        <div className="overflow-x-auto p-10">
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
              {classes.map((classDetails, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={classDetails?.class_image}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td>
                    <span className="text-base ">
                      {classDetails?.class_name}
                    </span>
                  </td>
                  <td>
                    <span className="text-base ">{classDetails?.price}</span>
                  </td>
                  <td>
                    <span className="text-base ">
                      {classDetails?.instructor_name}
                    </span>
                  </td>
                  <td>
                    <span className="text-base ">{classDetails?.status}</span>
                  </td>
                  <td>0</td>
                  <td></td>
                  {/* //put */}
                  <td>
                    <Link
                      to={`/dashboard/updateSingleClass/${classDetails?._id}`}
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
