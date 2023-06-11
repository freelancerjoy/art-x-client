import React from "react";

const InstractorsCard = ({ instrator }) => {
  const { photo, name, email } = instrator;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstractorsCard;
