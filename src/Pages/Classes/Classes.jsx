import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    fetch("https://art-x-server.vercel.app/allclasses")
      .then((res) => res.json())
      .then((data) => setAllClass(data));
  }, []);
  const approved = allClass?.filter((approve) => approve.status == "approved");

  return (
    <div className="w-11/12 mx-auto pt-20">
      <h1 className="text-blue-600 font-bold text-3xl">
        All Active Class : {approved?.length}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {approved?.map((approveClass) => (
          <ClassCard
            key={approveClass?._id}
            approveClass={approveClass}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
