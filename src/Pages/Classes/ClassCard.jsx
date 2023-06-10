import React, { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const ClassCard = ({ approveClass }) => {
  const { user } = useContext(AuthContest);
  const {
    _id,
    name,
    photo,
    email,
    price,
    instractorname,
    availablesit,
    status,
  } = approveClass;
  const handleSelect = (_id) => {
    fetch("http://localhost:5000/selectclass", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user?.email, payment: null }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div class="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Instrator Name: {instractorname}</p>
          <p>Avaiable Sit: {availablesit}</p>
          <p>Price: {price}</p>
          <div class="card-actions justify-end">
            <button onClick={() => handleSelect(_id)} class="btn btn-primary">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
