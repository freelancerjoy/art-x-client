import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-blue-200 text-lg text-base-content pt-20">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/adminhome">
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manageclases">Manage Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Manage Users</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Add a Class</Link>
            </li>
            <li>
              <Link to="/dashboard/users">My Classes</Link>
            </li>
            <div class="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
