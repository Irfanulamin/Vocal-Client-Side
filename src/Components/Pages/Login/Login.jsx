import React, { useContext, useState } from "react";
import loginVector from "../../../assets/login.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [hiddenOrVisible, setHiddenOrVisible] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data?.email, data?.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-14 w-full p-24">
      <div className="w-full lg:w-1/2 ">
        <img src={loginVector} />
      </div>
      <div className="w-full lg:w-1/2 bg-base-100 border rounded-lg border-indigo-600">
        <form className="p-11" onSubmit={handleSubmit(onSubmit)}>
          <h4 className=" tracking-wide text-indigo-600 text-6xl font-semibold text-center py-12">
            Login
          </h4>
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
                Password must contain at least One Capital letter and One
                Special character.
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            <div
              onClick={() => setHiddenOrVisible(!hiddenOrVisible)}
              className="p-3 text-center text-sm border border-black text-indigo-600 font-semibold inline-block rounded-sm mt-2"
            >
              <p>{hiddenOrVisible ? "Hide Password" : "Show Password"}</p>
            </div>
            <label className="label ">
              <Link to="/register" className="link link-hover text-base ">
                New to Website ?
                <span className="text-indigo-600"> Register</span>
              </Link>
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            className="hover:bg-white transition-all hover:text-indigo-600 bg-indigo-600 text-white w-full py-3 rounded-md font-semibold text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
