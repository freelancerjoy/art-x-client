import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InstractorsCard from "./InstractorsCard";

const InstratorPage = () => {
  const [instrators, setInstractors] = useState([]);
  useEffect(() => {
    fetch("https://art-x-server.vercel.app/instractor")
      .then((res) => res.json())
      .then((data) => setInstractors(data));
  }, []);
  console.log(instrators);
  return (
    <div className="w-11/12 mx-auto pt-32">
      <div className="grid grid-cols-3 gap-8">
        {instrators?.map((instrator) => (
          <InstractorsCard
            key={instrator?._id}
            instrator={instrator}></InstractorsCard>
        ))}
      </div>
    </div>
  );
};

export default InstratorPage;
