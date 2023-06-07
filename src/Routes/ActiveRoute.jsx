import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children, to }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "font-bold text-blue-500 rounded-full border-b-4 border-blue-300"
            : "";
        }}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveRoute;
