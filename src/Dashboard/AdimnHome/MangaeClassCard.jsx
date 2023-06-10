import React, { useEffect } from "react";

const MangaeClassCard = ({ singleClass }) => {
  const { name, photo, email, price, instractorname, availablesit, status } =
    singleClass;
  useEffect(() => {
    fetch();
  });
  return (
    <>
      {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}
      <tr>
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
        <td>{email}</td>
        <td>{availablesit}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-sm bg-yellow-300" disabled>
            {status}
          </button>{" "}
          <button className="btn btn-sm my-2 bg-green-500">Approved</button>
          <button className="btn btn-sm bg-red-600">Denied</button>
        </td>
        <td>
          {" "}
          <button className="btn btn-sm bg-blue-500">Sfeedback</button>
        </td>
      </tr>
    </>
  );
};

export default MangaeClassCard;
