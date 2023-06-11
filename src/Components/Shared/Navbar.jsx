import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogout = () => {
    logOut()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <header className="flex flex-col md:flex-row lg:flex-row justify-between items-center p-6 gap-6 ">
      <div className="flex justify-center items-end">
        <div>
          <img src="/logo.png" alt="logo" className="w-16 h-16 " />
        </div>
        <div>
          <p className="font-bold  text-base">Vocal Studio</p>
        </div>
      </div>
      {/* Home, Instructors, Classes, Dashboard and User profile picture */}
      <div className="flex justify-center items-center gap-3 flex-col md:flex-row lg:flex-row">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Instuctors
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Classes
        </NavLink>
        {user && (
          <NavLink
            to="/dashboard/mycart"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Dashboard
          </NavLink>
        )}
        {user?.photoURL && (
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        )}
        {user ? (
          <button onClick={handleLogout} className="text-base font-semibold">
            LogOut
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            LogIn
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
