import React, { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";

const ClassCard = ({ approveClass, isAdmin, isInstractor }) => {
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
    select,
  } = approveClass;
  console.log(select);
  const handleSelect = (_id) => {
    fetch(`http://localhost:5000/selectclass?email=${user?.email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: user?.email,
        selected_id: _id,
        payment: null,
        name,
        photo,
        price,
        instractorname,
        availablesit,
        status,
        select: "selected",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // fetch("http://localhost:5000/selectclass", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     email: user?.email,
    //     selected_id: _id,
    //     payment: null,
    //     name,
    //     photo,
    //     price,
    //     instractorname,
    //     availablesit,
    //     status,
    //     select: "selected",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div>
      <div class="card card-compact w-96 h-96 bg-base-100 border-4 border-dashed border-blue-300 p-5 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div class="card-body p-4 ">
          <h2 class="card-title">{name}</h2>
          <p>
            <span className="font-bold">Instrator Name: </span>
            <span className="text-blue-600"> {instractorname}</span>
          </p>
          <p>
            <span className="font-bold">Avaiable Sit:</span>
            <span className="text-blue-600"> {availablesit}</span>
          </p>
          <p>
            <span className="font-bold">Price:</span>{" "}
            <span className="text-blue-600">{price}</span>
          </p>
          <div class="card-actions justify-end">
            <button
              onClick={() => handleSelect(_id)}
              class="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white"
              disabled={
                (isAdmin?.admin && true) ||
                (isInstractor.instractor && true) ||
                (select && true)
              }>
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
