import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useInstractor = () => {
  const { user, loading } = useAuth();
  const { data: isInstractor = {}, isLoading: isInstractorLoading } = useQuery({
    queryKey: ["instractor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://art-x-server.vercel.app/users/${user?.email}`
      );

      return res.json();
    },
  });
  return [isInstractor, isInstractorLoading];
};
export default useInstractor;
