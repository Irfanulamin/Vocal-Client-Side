import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm drawer-button lg:hidden my-4"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  bg-slate-600 ">
            <li className="w-full flex items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <span className="text-lg font-semibold text-black">
                {user?.displayName}
              </span>
              <span className="text-green-600 text-lg font-semibold">
                {user?.role ? user?.role : "student"}
              </span>
            </li>

            <li>
              <Link
                to="/dashboard/selectedClasses"
                className="text-2xl font-semibold text-white"
              >
                My Selected Classes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allusers"
                className="text-2xl font-semibold text-white"
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addClasses"
                className="text-2xl font-semibold text-white"
              >
                Add A Class
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/manageClasses"
                className="text-2xl font-semibold text-white"
              >
                Manage Classes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myClasses"
                className="text-2xl font-semibold text-white"
              >
                MY Classes
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/payment"
                className="text-2xl font-semibold text-white"
              >
                Payment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
