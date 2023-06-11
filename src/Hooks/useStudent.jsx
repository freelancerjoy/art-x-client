import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useStudent = () => {
  const { user, loading } = useAuth();
  const { data: isStudent = {}, isLoading: isStudentLoading } = useQuery({
    queryKey: ["student", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      return res.json();
    },
  });
  console.log(isStudent);
  return [isStudent, isStudentLoading];
};
export default useStudent;
