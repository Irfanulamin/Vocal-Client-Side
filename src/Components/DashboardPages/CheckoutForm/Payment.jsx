import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
  const [cart] = useCart();
  const amount = cart.reduce(
    (sum, classDetails) => sum + classDetails.class_price,
    0
  );

  const totalPrice = parseInt(amount.toFixed(2));
  console.log(totalPrice);

  return (
    <div className="w-full p-10 flex justify-center items-center">
      <div className="w-full">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} totalPrice={totalPrice}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
