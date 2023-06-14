import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useClassSelect = () => {
  const { user, loading } = useAuth();
  const { data: isStudent = {}, isLoading: isStudentLoading } = useQuery({
    queryKey: ["student", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://art-x-server.vercel.app/users/${user?.email}`);
      return res.json();
    },
  });
  console.log(isStudent);
  return [isStudent, isStudentLoading];
};
export default useClassSelect;
