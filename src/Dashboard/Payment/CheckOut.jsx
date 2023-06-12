import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const CheckOut = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContest);
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: ConfirmError } =
      await stripe.confirmCardPayment(`${clientSecret}`, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "annoimas",
            email: user?.email || "annoimas",
          },
        },
      });
    if (ConfirmError) {
      console.log(ConfirmError);
    }
    console.log(paymentIntent);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p className="text-red-600">{cardError}</p>
    </>
  );
};

export default CheckOut;
