import { Navigate, useLocation } from "react-router-dom";
import { AuthContest } from "../Provider/AuthProvider";
import { useContext } from "react";
import { ScaleLoader } from "react-spinners";

const PrivetRoute = ({ children }) => {
  const { user, loading,  } = useContext(AuthContest);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
