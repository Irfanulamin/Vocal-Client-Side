import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [classDetail, setClassDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pendingClassesDetails")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleClick = (id) => {
    const selectedClassDetails = classes.find(
      (classDetails) => classDetails._id === id
    );
    setClassDetail(selectedClassDetails);
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    setShowModal(false);
    console.log("dfgd");
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
    console.log(classDetail);

    axios
      .patch(
        `http://localhost:5000/pendingClass/feedback/${classDetail?._id}`,
        { feedback }
      )
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const handleApprove = (id) => {
    const selectedClassDetails = classes.find(
      (classDetails) => classDetails._id === id
    );

    const {
      _id,
      instructor_name,
      email,
      class_name,
      class_image,
      available_seats,
      price,
    } = selectedClassDetails;

    const newClassDetails = {
      instructor_name,
      email,
      class_image,
      class_name,
      available_seats: parseInt(available_seats),
      price: parseInt(price),
      students: 0,
    };

    Swal.fire({
      title: "Are you sure you want to approve?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "##00FF00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:5000/classes", newClassDetails)
          .then((response) => {
            if (response?.data?.insertedId) {
              axios
                .patch(`http://localhost:5000/pendingClass/approve/${_id}`)
                .then((res) => console.log(res))
                .catch((error) => console.error(error));
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        Swal.fire("Approved!", "This Class is approved.", "success");
      }
    });
  };

  const handleDeny = (id) => {
    axios
      .patch(`http://localhost:5000/pendingClass/deny/${id}`)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const reversedClasses = [...classes].reverse();

  return (
    <>
      {showModal && (
        <div className="absolute z-10">
          <form onSubmit={handleSubmit} className="modal-box">
            <h3 className="font-bold text-lg text-green-600">Feedback!</h3>
            <hr className="border-2" />
            <p className="py-4">
              <input type="text" name="feedback" placeholder="feedback" />
            </p>
            <div>
              <input
                type="submit"
                value="Submit"
                className="py-2 px-4 bg-green-600 text-white"
              />
            </div>
          </form>
        </div>
      )}
      <div className="p-10">
        <div className="mb-6">
          <h2 className="text-center text-2xl font-semibold text-black ">
            Manage Classes
          </h2>
        </div>
        <hr className="border-2 my-5" />
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
              {reversedClasses.map((classDetails, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={classDetails?.class_image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{classDetails?.class_name}</td>
                  <td>{classDetails?.instructor_name}</td>
                  <td>{classDetails?.email}</td>
                  <td>{classDetails?.available_seats}</td>
                  <td>{classDetails?.price}$</td>
                  <th>
                    <div className="flex items-center justify-center gap-3">
                      <div>
                        <button
                          onClick={() => handleApprove(classDetails?._id)}
                          className="btn bg-green-600 text-white rounded btn-xs"
                        >
                          Approve
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handleDeny(classDetails?._id)}
                          className="btn bg-red-600 text-white rounded btn-xs"
                        >
                          Deny
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => handleClick(classDetails?._id)}
                          className="btn bg-yellow-500 text-white rounded btn-xs"
                        >
                          Feedback
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageClasses;
