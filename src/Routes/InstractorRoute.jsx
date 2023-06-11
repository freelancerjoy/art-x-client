import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useInstractor from "../Hooks/useInstractor";

const InstractorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isInstractor, isInstractorLoading] = useInstractor();
  const location = useLocation();
  console.log(isInstractor?.instractor);
  if (loading || isInstractorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isInstractor?.instractor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstractorRoute;
