import React, { useState } from "react";
import useAllusers from "../../../hooks/useAllusers";
import axios from "axios";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [allusers, refetch] = useAllusers();
  const [disable, setDisable] = useState(false);

  const handleAdmin = (id) => {
    axios
      .patch(`https://server-side-sand-omega.vercel.app/users/admin/${id}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "This user is now an Admin!",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInstructor = (id) => {
    axios
      .patch(`https://server-side-sand-omega.vercel.app/users/instructor/${id}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "This user is now a Instructor!",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-3/4">
      <h2 className="text-center text-3xl py-4 font-semibold">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <p className="font-semibold text-sm">{user?.name}</p>
                </td>
                <td>{user?.email}</td>
                <td>
                  <p className="text-sm font-semibold text-green-600">
                    {user?.role ? user?.role : "student "}
                  </p>
                </td>
                <td>
                  {user?.role === "instructor" ? (
                    <>
                      <button className="btn btn-xs btn-disabled">
                        Instructor
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleInstructor(user?._id)}
                        className="btn btn-xs bg-red-600 text-white"
                      >
                        Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <>
                      <button className="btn btn-xs btn-disabled">Admin</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleAdmin(user?._id);
                        }}
                        className="btn btn-xs bg-red-600 text-white"
                      >
                        Admin
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
