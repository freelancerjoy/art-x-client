import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      console.log(res.json());
      return res.json();
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
