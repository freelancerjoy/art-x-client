import React, { useContext } from "react";

import { Link } from "react-router-dom";
import ActiveRoute from "../../../Routes/ActiveRoute";
import { AuthContest } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContest);

  const navOptions = (
    <>
      <li>
        <ActiveRoute to="/">Home</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/instractors">Instructors</ActiveRoute>
      </li>
      <li>
        <ActiveRoute to="/classes">Classes</ActiveRoute>
      </li>
      {user && (
        <li>
          <ActiveRoute to="/dashboard">Dashboard</ActiveRoute>
        </li>
      )}
    </>
  );
  return (
    <div className="w-full fixed z-10">
      <div className="navbar w-11/12 mx-auto rounded-full p-0 bg-opacity-70 bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case px-8 text-2xl font-bold text-blue-600">
            Art-X
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end mx-8">
          {user ? (
            <>
              <img
                className="w-10 border border-blue-500 mr-5 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button
                onClick={logOutUser}
                className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login" className=" ">
              <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
