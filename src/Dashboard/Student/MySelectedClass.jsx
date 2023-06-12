import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContest } from "../../Provider/AuthProvider";
import SelectedClassRow from "./SelectedClassRow";

const MySelectedClass = () => {
  const { user } = useContext(AuthContest);
  const [selectedClasses, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://art-x-server.vercel.app/selectclass?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user]);

  return (
    <div>
      <div className="w-11/12 mx-auto ">
        <div className=" overflow-x-auto">
          <table className="table min-w-screen">
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
                <th>Available seats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses?.map((singleClass) => (
                <SelectedClassRow
                  key={singleClass._id}
                  singleClass={singleClass}></SelectedClassRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
