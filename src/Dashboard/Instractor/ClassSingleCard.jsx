import React from "react";

const ClassSingleCard = ({ myClass }) => {
  console.log(myClass);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={myClass.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {myClass.name}
            <div className="badge badge-secondary">{myClass.status}</div>
          </h2>
          <p>Total Enroled Students</p>
          <p>Price: {myClass.price}</p>
          <p>Feedback</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm border-0 rounded-tl-full rounded-br-full px-8 bg-blue-500 text-white">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSingleCard;
