import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/pendingClasses?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleModal = () => {
    //todo will get data
  };

  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button className="btn">open modal</button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
      <div>
        <div className="overflow-x-auto p-10">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Image</td>
                <td>Name</td>
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
                    <button onClick={() => window.my_modal_1.showModal()}>
                      Update
                    </button>
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
