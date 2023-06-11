import { useContext } from "react";
import { AuthContest } from "../Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContest);
  return auth;
};

export default useAuth;
