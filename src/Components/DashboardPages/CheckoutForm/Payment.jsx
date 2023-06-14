import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
  const params = useParams();
  const id = params.id;
  const { user } = useContext(AuthContext);
  const [selectedClassdetails, setSelectedClassDetails] = useState([]);
  const [cart] = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/selectedItems?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const selectedItem = cart.find((allClasses) => allClasses._id === id);
          console.log(selectedItem);
          setSelectedClassDetails(selectedItem);
        }
      });
  }, []);

  return (
    <div className="w-full p-10 flex justify-center items-center">
      <div className="w-full">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            selectedClassdetails={selectedClassdetails}
            totalPrice={selectedClassdetails?.class_price}
            image={selectedClassdetails?.class_image}
            name={selectedClassdetails?.class_name}
            id={selectedClassdetails?._id}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
