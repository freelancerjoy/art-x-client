import React from "react";

const InstractorsCard = ({ instrator }) => {
  const { photo, name, email } = instrator;
  return (
    <div>
      <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-400 text-white">
              See Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstractorsCard;
