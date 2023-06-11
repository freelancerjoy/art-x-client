import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InstractorsCard from "./InstractorsCard";

const InstratorPage = () => {
  const [instrators, setInstractors] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setInstractors(data));
  });
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
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
