import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
        {" "}
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default AdminHome;
