import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51NI12FJ2Ak22GPsk00KCxTgnT9xkXs7UvXxIZrXpADgNJMFwaMz1xj6TBQHP1kf9wfRD3SW63o9HwRfcTufgtExh00Dw1LpfL1"
);
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
