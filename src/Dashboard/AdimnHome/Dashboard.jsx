import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  console.log(isAdmin);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
          <div className="pt-20">
            <Outlet></Outlet>
          </div>
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
            {isAdmin?.admin === true && (
              <>
                <li>
                  <Link to="/dashboard/manageclases">Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Manage Users</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/addnewclass">Add a Class</Link>
            </li>
            <li>
              <Link to="/dashboard/myclasses">My Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/myslectedclasses">My Selected Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/mynroledclasses">My Enroled Classes</Link>
            </li>
            <div class="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
