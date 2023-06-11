import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedItems?userEmail=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, refetch];
};
export default useCart;
