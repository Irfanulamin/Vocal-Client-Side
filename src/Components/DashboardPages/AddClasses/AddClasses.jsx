import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClasses = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const class_name = form.class_name.value;
    const class_image = form.class_name.value;
    const instructor_name = form.instructor_name.value;
    const email = form.email.value;
    const available_seats = form.available_seats.value;
    const price = form.price.value;

    const item = {
      class_image,
      class_name,
      instructor_name,
      email,
      available_seats,
      price,
      status: "pending",
    };
    console.log(item);

    axios
      .post("https://server-side-sand-omega.vercel.app/pendingClasses", item)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "wait for admin approval!",
          });
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div className="w-full p-10 bg-base-300">
      <h2 className="text-center text-4xl font-semibold text-black">
        Add a Class
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            name="class_name"
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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

export default AddClasses;
