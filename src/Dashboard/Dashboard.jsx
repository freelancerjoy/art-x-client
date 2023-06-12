import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";
import useStudent from "../Hooks/UseStudent";
import { MdPayments } from "react-icons/md";

import {
  AiFillCloud,
  AiFillCrown,
  AiFillEdit,
  AiFillUnlock,
  AiOutlineAppstoreAdd,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstractor, isInstractorLoading] = useInstractor();
  const [isStudent, isStudentLoading] = useStudent();

  return (
    <div>
      <div className="drawer lg:drawer-open bg-white">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open Menu
          </label>
          <div className="pt-20 ">
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
                  <Link to="/dashboard/manageclases">
                    <AiFillUnlock></AiFillUnlock> Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/users">
                    <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd> Manage Users
                  </Link>
                </li>
              </>
            )}
            {isInstractor?.instractor === true && (
              <>
                <li>
                  <Link to="/dashboard/addnewclass">
                    <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd> Add a Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">
                    {" "}
                    <AiFillCloud></AiFillCloud>My Classes
                  </Link>
                </li>
              </>
            )}

            {isStudent.student === true && (
              <>
                <li>
                  <Link to="/dashboard/myslectedclasses">
                    <AiFillEdit></AiFillEdit> My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mynroledclasses">
                    <AiFillCrown></AiFillCrown> My Enroled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/succespayment">
                    <MdPayments></MdPayments> Payment History
                  </Link>
                </li>
              </>
            )}

            <div class="divider"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
