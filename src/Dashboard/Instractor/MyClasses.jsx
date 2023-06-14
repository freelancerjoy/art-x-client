import React, { useContext, useEffect, useState } from "react";
import ClassSingleCard from "./ClassSingleCard";
import { AuthContest } from "../../Provider/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContest);
  const [myClasses, setMyclasses] = useState([]);
  useEffect(() => {
    fetch(`https://art-x-server.vercel.app/classes?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyclasses(data));
  }, [user]);
  console.log(myClasses);
  return (
    <div>
      <h1 className="font-bold text-2xl my-4 text-blue-600">
        Total upload Class: {myClasses.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Total Enroled Students</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClasses?.map((myClass, i) => (
              <tr key={myClass._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myClass?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-md font-bold">{myClass?.name}</td>
                <td className="text-md font-bold">{myClass?.enrolled}</td>
                <td
                  className={`${
                    (myClass?.status === "pending" && "text-yellow-600") ||
                    (myClass?.status === "approved" && "text-green-600") ||
                    (myClass?.status === "denied" && "text-red-600")
                  } "text-md font-bold"`}>
                  {myClass?.status}
                </td>
                <td>{myClass?.feedback?.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
