import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./card.css";

const CheckoutForm = ({ cart, totalPrice }) => {
  const { user } = useContext(AuthContext);
  const [carderror, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState("");
  const [transactionID, setTransactionID] = useState("");

  useEffect(() => {
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
      const payment = {
        email: user?.email,
        transactionID: paymentIntent.id,
        totalPrice,
        data: new Date(),
        orderStatus: "Service Pending",
        quantity: cart.length,
        items: cart.map((item) => item._id),
        itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          alert("done");
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3" onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!stripe || !clientSecret || processing}>
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
