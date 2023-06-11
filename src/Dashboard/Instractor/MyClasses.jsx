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
  return (
    <div>
      <h1 className="font-bold text-2xl my-4 text-blue-600">
        Total upload Class: {myClasses.length}
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {myClasses.map((myClass) => (
          <ClassSingleCard
            key={myClass._id}
            myClass={myClass}></ClassSingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
