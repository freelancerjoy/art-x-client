import React, { useEffect, useState } from "react";
import MangaeClassCard from "./MangaeClassCard";

const ManageAllClass = () => {
  const [allClasses, setAllclasses] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/allclasses")
      .then((res) => res.json())
      .then((data) => setAllclasses(data));
  });
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto max-h-max w-full">
        <table className="table w-full border-2 border-blue-200 border-dashed">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
                {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}
              </th>
              <th>Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((singleClass) => (
              <MangaeClassCard
                key={singleClass._id}
                singleClass={singleClass}></MangaeClassCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllClass;
