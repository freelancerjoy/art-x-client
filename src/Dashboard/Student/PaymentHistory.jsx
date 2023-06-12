import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PaymentRoew from "./PaymentRoew";
import { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContest);
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetch(`https://art-x-server.vercel.app/paymentsucces?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, []);
  console.log(payment);
  return (
    <div>
      <div className="overflow-x-auto  w-full">
        <table className="table w-full border-2">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Emial</th>
              <th>Transitaion ID</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((ps, index) => (
              <PaymentRoew key={ps._id} ps={ps} index={index}></PaymentRoew>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
