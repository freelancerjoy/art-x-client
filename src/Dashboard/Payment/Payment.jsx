import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_KEY}`);
const Payment = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stateData = Object.fromEntries(queryParams.entries());

  console.log(stateData);
  const price = stateData?.price;
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOut price={price} stateData={stateData}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
