import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import classUpdateStudent from "../../Hooks/classUpdateStudent";
const CheckOut = ({ price, stateData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContest);
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [paymrntSucces, setpaymrntSucces] = useState();
  const [allClasses, setAllClass] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  useEffect(() => {
    fetch(`https://art-x-server.vercel.app/allclasses`)
      .then((res) => res.json())
      .then((data) => setAllClass(data));
  }, []);

  const updateClass = allClasses?.find(
    (cl) => cl._id === stateData?.selected_id
  );

  console.log(updateClass);

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
    if (paymentIntent.status === "succeeded") {
      setpaymrntSucces(paymentIntent.id);

      fetch(
        `http://localhost:5000/selectclass/${stateData?._id}?email=${user?.email}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ payment: "succesed" }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
      // Avavble seet less
      fetch(`http://localhost:5000/enrolled/${stateData?.selected_id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          availablesit: updateClass.availablesit,
          enrolled: updateClass.enrolled,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // Payment save
      fetch(`http://localhost:5000/paymentsucces`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          trassitionID: paymentIntent.id,
          name: stateData?.name,
          email: stateData?.email,
          price: stateData?.price,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <>
      {" "}
      <form className="w-1/2" onSubmit={handleSubmit}>
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
          className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 mt-8 bg-blue-500 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {paymrntSucces && (
        <p className="text-green-600">
          Succcesl ful payment you trasition Id : {paymrntSucces}
        </p>
      )}
    </>
  );
};

export default CheckOut;
