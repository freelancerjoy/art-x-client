import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import PopularClassCard from "../PopularClasses/PopularClassCard";
import useAxios from "../../../Hooks/useAxios";
import Lodder from "../../../Components/Lodder";

const PopularInstractor = () => {
  const [popularInstractor, setPopularInstractor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxios();
  useEffect(() => {
    axiosSecure("/instractor").then((response) => {
      setPopularInstractor(response.data);
      setLoading(false);
    });
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
      <div
        className={`${
          loading ? "" : "grid grid-cols-1 lg:grid-cols-3 gap-5"
        } `}>
        {loading ? (
          <Lodder></Lodder>
        ) : (
          mostPopular?.map((popular) => (
            <PopularClassCard
              key={popular._id}
              popular={popular}></PopularClassCard>
          ))
        )}
      </div>
    </div>
  );
};

export default PopularInstractor;
