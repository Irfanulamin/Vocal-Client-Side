import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ModifyClassDetails = () => {
  const { user } = useContext(AuthContext);
  const [classDetails, setClassDetails] = useState([]);

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(`http://localhost:5000/pendingClasses?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const selectedClass = data.find(
          (classdetails) => classdetails?._id === id
        );
        setClassDetails(selectedClass);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event?.target;
    const class_name = form.class_name.value;
    const class_image = form.class_image.value;
    const available_seats = form.available_seats.value;
    const price = form.price.value;
    const updatedItem = { class_name, class_image, available_seats, price };

    axios
      .put(
        `http://localhost:5000/pendingClasses?email=${user?.email}`,
        updatedItem
      )
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          Swal.fire({
            icon: "success",
            title: "Your data Has been updated",
            text: "wait for admin approval!",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating class:", error);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-4xl font-semibold text-center py-6">
        You can Modify Your Class Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            name="class_name"
            defaultValue={classDetails?.class_name}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="text"
            name="class_image"
            defaultValue={classDetails?.class_image}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            disabled
            defaultValue={user?.displayName}
            name="instructor_name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            defaultValue={user?.email}
            disabled
            type="text"
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            name="available_seats"
            defaultValue={classDetails?.available_seats}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            defaultValue={classDetails?.price}
            className="input input-bordered"
          />
        </div>

        <div className="py-5">
          <input
            type="submit"
            value="Add"
            className="w-full bg-black py-3 text-white rounded text-xl font-semibold hover:bg-transparent hover:text-black transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default ModifyClassDetails;
