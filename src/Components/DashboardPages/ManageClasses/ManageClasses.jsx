import React, { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classs, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/pendingClassesDetails")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src="/tailwind-css-component-profile-2@56w.png" />
                    </div>
                  </div>
                </div>
              </td>
              <td>class name</td>
              <td>name</td>
              <td>name@.com</td>
              <td>0</td>
              <td>0</td>
              <th>
                <button className="btn bg-green-600 text-white rounded btn-xs">
                  Approve
                </button>
              </th>
              <th>
                <button className="btn bg-red-600 text-white rounded btn-xs">
                  Deny
                </button>
              </th>
              <th>
                <button className="btn bg-yellow-500 text-white rounded btn-xs">
                  Feedback
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
