import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { useEffect } from "react";
import { useState } from "react";
import PopularClassCard from "./PopularClassCard";
import useAxios from "../../../Hooks/useAxios";
import Lodder from "../../../Components/Lodder";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxios();
  useEffect(() => {
    axiosSecure("/popularclass").then((response) => {
      setPopularClass(response.data);
      setLoading(false);
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

export default PopularClasses;
