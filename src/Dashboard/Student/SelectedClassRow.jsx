import React from "react";
import { Link, json } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import Swal from "sweetalert2";

const SelectedClassRow = ({ singleClass, refetch }) => {
  const [axiosSecure] = useAxios();

  const {
    _id,
    name,
    photo,
    email,
    price,
    instractorname,
    availablesit,
    status,
    payment,
  } = singleClass;
  const queryParam = new URLSearchParams(singleClass).toString();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axiosSecure
          .delete(`https://art-x-server.vercel.app/deleteclass/${_id}`)
          .then((res) => {
            if (res?.data?.deletedCount === 1) {
              console.log("ok");
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr className="border-2 ">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{instractorname}</td>
      {!payment && <td>{availablesit}</td>}
      <td className="text-right">$ {price}</td>
      <td>
        {payment ? (
          <p className="text-green-700 font-bold"> Enrolled</p>
        ) : (
          <>
            <Link to={`/dashboard/payment?${queryParam}`}>
              <button className="btn btn-sm my-2 bg-green-500">Pay</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm bg-red-600">
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default SelectedClassRow;
