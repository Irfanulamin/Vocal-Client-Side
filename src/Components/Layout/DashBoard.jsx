import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../PrivateRoutes/useAdmin";
import useStudent from "../../PrivateRoutes/useStudent";
import useInstructor from "../../PrivateRoutes/useInstructor";

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
              <div className="p-2">
                <p className="text-lg font-semibold text-black">
                  {user?.displayName}
                </p>
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
            {isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/manageClasses"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
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
                  My Selected Classes
                </NavLink>
              </li>
            )}
            {isAdmin && (
              <li>
                <NavLink
                  to="/dashboard/allusers"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Manage Users
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
