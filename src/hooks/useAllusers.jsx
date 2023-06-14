import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useAllusers = () => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: allusers = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://server-side-sand-omega.vercel.app/users`
      );
      return res.json();
    },
  });

  return [allusers, refetch];
};
export default useAllusers;
