import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row lg:flex-row justify-between items-center p-6 gap-6 ">
      <div className="flex justify-center items-end">
        <div>
          <img src="/logo.png" alt="logo" className="w-8 h-8 lg:w-11 lg:h-11" />
        </div>
        <div>
          <p className="font-bold lg:text-2xl text-base">Vocal Studio</p>
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
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          LogIn
        </NavLink>
        <button className="text-base font-semibold">LogOut</button>
      </div>
    </header>
  );
};

export default Navbar;
