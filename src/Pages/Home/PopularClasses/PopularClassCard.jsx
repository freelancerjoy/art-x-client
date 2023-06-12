import React from "react";

const PopularClassCard = ({ popular }) => {
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
    enrolled,
  } = popular;
  return (
    <div className="">
      <div
        className={`card card-compact ${
          availablesit
            ? "h-96 p-5 text-black"
            : "h-64 p-0 bg-blue-300 text-white"
        } w-full h-96 bg-base-100 border-4 border-dashed border-blue-300  shadow-xl`}>
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {enrolled && (
            <p>
              <span className="font-bold">Total Enrolled Students: </span>
              <span className="text-blue-600"> {enrolled}</span>
            </p>
          )}
          {availablesit && (
            <p>
              <span className="font-bold">Avaiable Sit:</span>
              <span className="text-blue-600"> {availablesit}</span>
            </p>
          )}
          {price && (
            <p>
              <span className="font-bold">Price:</span>{" "}
              <span className="text-blue-600">{price}</span>
            </p>
          )}
          <div className="card-actions justify-end">
            <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
