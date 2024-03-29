import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    refetch,
    data: cart = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://server-side-sand-omega.vercel.app/selectedItems?userEmail=${user?.email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return res.json();
    },
  });

  return [cart, refetch, error];
};
export default useCart;
