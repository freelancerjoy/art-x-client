import React from "react";
import SectionTitle from "../../../Coponents/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";
import useAxios from "../../../Hooks/useAxios";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  const [axiosSecure] = useAxios();
  useEffect(() => {
    axiosSecure("/popularclass").then((response) => {
      setPopularClass(response.data);
    });
  }, []);
  const mostPopular = popularClass.slice(0, 6);
  console.log(popularClass);
  return (
    <div className="lg:w-11/12 w-full mx-auto">
      <SectionTitle
        heading={"Our Poupular Class"}
        subHeading={
          "We provide three classes with nine to twenty children each aged twelve months to six years of age."
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

export default PopularClasses;
