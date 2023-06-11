import React from "react";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  return <div>{cart.length}</div>;
};

export default MyCart;
