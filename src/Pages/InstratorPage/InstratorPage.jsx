import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InstractorsCard from "./InstractorsCard";
import Lodder from "../../Components/Lodder";
import useAxios from "../../Hooks/useAxios";

const InstratorPage = () => {
  const [instrators, setInstractors] = useState([]);
  const [axiosSecure] = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure("instractor").then((response) => {
      setInstractors(response.data);
      setLoading(false);
    });
  }, []);
  console.log(instrators);
  return (
    <div className="w-11/12 mx-auto pt-20 pb-10">
      <h1 className="text-blue-600 font-bold text-2xl my-5">
        All Active Class : {instrators?.length}
      </h1>
      <div
        className={`${
          loading ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-5"
        } `}>
        {loading ? (
          <Lodder></Lodder>
        ) : (
          instrators?.map((instrator) => (
            <InstractorsCard
              key={instrator?._id}
              instrator={instrator}></InstractorsCard>
          ))
        )}
      </div>
    </div>
  );
};

export default InstratorPage;
