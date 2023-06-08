import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import loginVector from "../../../assets/login.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [hiddenOrVisible, setHiddenOrVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data?.confirmPassword !== data?.password) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Your Confirm Password Doesn't match!",
      });
    } else {
      createUser(data?.email, data?.password)
        .then((res) => {
          const user = res.user;
          if (user) {
            updateUserProfile(data?.name, data?.photoUrl)
              .then(() => {})
              .catch((err) => {
                console.log(err.message);
              });
            Swal.fire({
              icon: "success",
              title: "",
              text: "Welcome to Vocal Studio!",
            });
            reset();
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-14 w-full p-24">
      <div className="w-full lg:w-1/2 bg-base-100 border rounded-lg border-indigo-500">
        <form className="p-11" onSubmit={handleSubmit(onSubmit)}>
          <h4 className=" tracking-wide text-indigo-600 text-6xl font-semibold text-center py-12">
            Register
          </h4>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold text-indigo-500">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered rounded-lg text-indigo-600"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-600 p-2">This field is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold text-indigo-500">Photo url</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered rounded-lg text-indigo-600"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <p className="text-red-600 p-2">This field is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold text-indigo-500">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered rounded-lg text-indigo-600"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-600 p-2">This field is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold text-indigo-500">Password</span>
            </label>
            <input
              type={hiddenOrVisible ? "text" : "password"}
              placeholder="password"
              className="input input-bordered rounded-lg text-indigo-600"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">This field is required</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Confirm Password must contain at least One Capital letter and
                One Special character.
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Confirm Password must be 6 characters
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold text-indigo-500">
                Confirm Password
              </span>
            </label>
            <input
              type={hiddenOrVisible ? "text" : "password"}
              placeholder="confirm password"
              className="input input-bordered rounded-lg text-indigo-600"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
              })}
            />
            {errors.confirmPassword?.type === "required" && (
              <p className="text-red-600">This field is required</p>
            )}
            {errors.confirmPassword?.type === "pattern" && (
              <p className="text-red-600">
                Password must contain at least One Capital letter and One
                Special character.
              </p>
            )}
            {errors.confirmPassword?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            <div
              onClick={() => setHiddenOrVisible(!hiddenOrVisible)}
              className="p-3 text-center text-sm border border-black text-indigo-600 font-semibold inline-block rounded-sm mt-2"
            >
              <p>{hiddenOrVisible ? "Hide Password" : "Show Password"}</p>
            </div>
            <label className="label mt-4">
              <Link to="/login" className="link link-hover text-base ">
                Already have an account ?
                <span className="text-indigo-600"> Login</span>
              </Link>
            </label>
          </div>
          <input
            type="submit"
            value="Register"
            className="hover:bg-white transition-all hover:text-indigo-600 bg-indigo-600 text-white w-full py-3 rounded-md font-semibold text-xl"
          />
        </form>
      </div>
      <div className="w-full lg:w-1/2 ">
        <img src={loginVector} />
      </div>
    </div>
  );
};

export default Register;
