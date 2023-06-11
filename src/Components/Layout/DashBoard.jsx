import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
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
          <ul className="menu p-4 w-80 h-full  bg-yellow-600 text-base-content">
            <li className="w-full flex items-center">
              <Link to="/">
                <img src="/logo.png" className="h-32 w-100%" />
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/mycart"
                className="text-2xl font-semibold text-white"
              >
                My Cart
              </Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
