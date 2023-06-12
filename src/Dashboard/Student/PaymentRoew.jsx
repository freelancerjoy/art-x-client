import React from "react";

const PaymentRoew = ({ ps, index }) => {
  return (
    <>
      <tr className="bg-base-200">
        <th>{index + 1}</th>
        <td>{ps.name}</td>
        <td>{ps.email}</td>
        <td>{ps.trassitionID}</td>
      </tr>
    </>
  );
};

export default PaymentRoew;
