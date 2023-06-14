import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./card.css";
import axios from "axios";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, totalPrice, id, name, image }) => {
  const { user } = useContext(AuthContext);
  const [carderror, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState("");
  const [transactionID, setTransactionID] = useState("");

  useEffect(() => {
    if (totalPrice) {
      axiosSecure
        .post("/create-payment-intent", {
          totalPrice,
        })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log(error.message);
    } else {
      setCardError("");
      // console.log(paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      setTransactionID(paymentIntent?.id);
      console.log(cart);
      const payment = {
        email: user?.email,
        transactionID: paymentIntent.id,
        totalPrice,
        date: new Date(),
        item: id,
        itemName: name,
        image: image,
      };
      console.log(payment);
      axios
        .post("https://server-side-sand-omega.vercel.app/payments", payment)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              icon: "Success",
              title: "Check out your Enroll Class Section",
              text: "",
              footer: "",
            });
            axios
              .delete(
                `https://server-side-sand-omega.vercel.app/selectedItems/${id}`
              )
              .then((response) => {
                console.log(response.data.deletedCount);
              })
              .catch((error) => {
                console.error(error);
              });
          }
        });
    }
  };

  return (
    <>
      <form className="w-2/3" onSubmit={handleSubmit}>
        <h2 className="text-lg">Please put your Card Details here.</h2>
        <input
          type="text"
          name="name"
          defaultValue={user?.displayName}
          disabled
        />
        <input type="text" name="email" defaultValue={user?.email} disabled />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="px-7 bg-black rounded text-white hover:bg-white hover:text-black transition-all py-2"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {carderror && (
        <p className="text-red-600 text-xl font-semibold">{carderror}</p>
      )}
      {transactionID && (
        <p className="text-green-600">
          Transanction complete and your transanction id is {transactionID}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
