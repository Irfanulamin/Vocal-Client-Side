import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../PrivateRoutes/useAdmin";
import useStudent from "../../PrivateRoutes/useStudent";
import useInstructor from "../../PrivateRoutes/useInstructor";
import { AiOutlineHome, AiOutlineVideoCamera } from "react-icons/ai";
import { FaHistory, FaPhotoVideo, FaUsersCog } from "react-icons/fa";
import {
  MdOutlineSettingsInputComposite,
  MdOutlinePostAdd,
} from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

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
        <div className="drawer-side z-30">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full  bg-white  border-r-2 border-black">
            <li className="w-full flex items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="p-2 flex justify-center items-center">
                <div>
                  <p className="text-lg font-semibold text-black">
                    {user?.displayName}
                  </p>
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-green-600">
                    {isAdmin && "Admin"}
                    {isInstructor && "Instructor"}
                    {isStudent && "Student"}
                  </p>
                </div>
              </div>
              <div className="p-2">
                <p className="text-base font-semibold text-green-600">
                  {user?.email}
                </p>
              </div>
              {/* <span className="text-green-600 text-lg font-semibold">
                {user?.role ? user?.role : "student"}
              </span> */}
            </li>
            <hr />
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                <AiOutlineHome></AiOutlineHome>
                Home
              </NavLink>
            </li>
            {isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <FaUsersCog></FaUsersCog>
                  Manage Users
                </NavLink>
              </li>
            )}
            {isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <MdOutlineSettingsInputComposite></MdOutlineSettingsInputComposite>
                  Manage Classes
                </NavLink>
              </li>
            )}
            {isStudent && (
              <li>
                <NavLink
                  to="/dashboard/selectedClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <AiOutlineVideoCamera></AiOutlineVideoCamera>
                  My Selected Classes
                </NavLink>
              </li>
            )}
            {isInstructor && (
              <li
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <NavLink
                  to="/dashboard/addClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <MdOutlinePostAdd></MdOutlinePostAdd>
                  Add A Class
                </NavLink>
              </li>
            )}
            {isInstructor && (
              <li>
                <NavLink
                  to="/dashboard/myClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <FaPhotoVideo></FaPhotoVideo>
                  My Classes
                </NavLink>
              </li>
            )}
            {isStudent && (
              <li>
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <SiGoogleclassroom></SiGoogleclassroom>
                  My Enrolled Class
                </NavLink>
              </li>
            )}
            {isStudent && (
              <li>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <FaHistory></FaHistory>
                  My Payment History
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
