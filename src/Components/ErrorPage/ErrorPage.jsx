import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div
        className="
      "
      >
        <p className="text-center text-3xl  font-sans font-semibold mb-3">
          Opps , something went wrong!!
        </p>
      </div>
      <div></div>
      <div>
        <Link to="/">
          <div className="flex justify-center items-center ">
            <p className="btn border-none hover:text-black hover:bg-transparent bg-yellow-400 text-lg tracking-wider font-semibold ">
              Go to the Home Page
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
