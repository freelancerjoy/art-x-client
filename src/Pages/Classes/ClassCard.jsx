import React, { useContext } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

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
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Please Login",
        text: "You can see after login!",
      });
    }

    fetch(`https://art-x-server.vercel.app/selectclass?email=${user?.email}`, {
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

    // fetch("https://art-x-server.vercel.app/selectclass", {
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
      <div
        class={`card card-compact w-full h-96 ${
          availablesit == 0 ? "bg-red-500 text-white" : "bg-base-100 "
        } bg-base-100 border-4 border-dashed border-blue-300 p-5 shadow-xl`}>
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
                (select && true) ||
                availablesit == 0
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
