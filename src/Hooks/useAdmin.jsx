import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // use axios secure with react query
  const { data: isAdmin = {}, isLoading: isAdminLoading } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://art-x-server.vercel.app/users/${user?.email}`
      );
      return res.json();
    },
  });
  console.log(isAdmin.admin);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
