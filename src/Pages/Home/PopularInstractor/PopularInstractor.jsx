import React from "react";
import SectionTitle from "../../../Coponents/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import PopularClassCard from "../PopularClasses/PopularClassCard";

const PopularInstractor = () => {
  const [popularInstractor, setPopularInstractor] = useState([]);
  useEffect(() => {
    fetch("https://art-x-server.vercel.app/instractor")
      .then((res) => res.json())
      .then((data) => setPopularInstractor(data));
  }, []);
  const mostPopular = popularInstractor.slice(0, 6);
  console.log(popularInstractor);
  return (
    <div className="w-11/12 mx-auto">
      <SectionTitle
        heading={"Our Popular Instractor"}
        subHeading={
          "We have an excellent Instartor to child ratio at our Art-X to ensure that each child receives the attention he or she needs"
        }></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {mostPopular?.map((popular) => (
          <PopularClassCard
            key={popular._id}
            popular={popular}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstractor;
