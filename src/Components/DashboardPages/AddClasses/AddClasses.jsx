import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full p-10">
      <h2 className="text-center font-semibold text-black text-3xl py-12 border-2 border-black mb-7">
        ADD A CLASS
      </h2>
      <from className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            className="input input-bordered"
            {...register("className", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">
              Class Image
            </span>
          </label>
          <input
            type="text"
            placeholder="Class Image"
            className="input input-bordered"
            {...register("classImage", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">
              Instructor Name
            </span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            disabled
            placeholder="Instructor Name"
            className="input input-bordered"
            {...register("instructorName", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">
              Instructor Email
            </span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            disabled
            placeholder="Instructor Email"
            className="input input-bordered"
            {...register("instructorEmail", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">
              Available Seats
            </span>
          </label>
          <input
            type="text"
            placeholder="Available Seat"
            className="input input-bordered"
            {...register("availableSeat", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg font-semibold text-black">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered"
            {...register("price", { required: true })}
          />
        </div>
        <div className="py-5">
          <input
            type="submit"
            value="Add"
            className="w-full bg-black py-3 text-white rounded text-xl font-semibold hover:bg-transparent hover:text-black transition-all"
          />
        </div>
      </from>
    </div>
  );
};

export default AddClasses;
