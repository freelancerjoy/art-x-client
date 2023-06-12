import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div className={`app `}>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstractor></PopularInstractor>
      <Review></Review>
    </div>
  );
};

export default Home;
