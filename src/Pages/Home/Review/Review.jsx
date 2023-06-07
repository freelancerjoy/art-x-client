import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Review.css";
// import required modules
import { Navigation } from "swiper";
import SectionTitle from "../../../Coponents/SectionTitle";

const Review = () => {
  return (
    <div>
      <SectionTitle
        heading={"Testimonials about center"}
        subHeading={
          "We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs"
        }></SectionTitle>
      <div
        className="w-11/12 mx-auto
 ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="bg-blue-50 bg-opacity-80 rounded-3xl  mx-28">
              <div className="flex  gap-4 items-center rounded-3xl border-blue-600 justify-center m-8 border-[2px] border-spacing-2 border-dashed ">
                <div className="m-10">
                  <div className="w-32 h-32">
                    <img
                      className="rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-blue-600 mt-2">Eliza Jane Doe</p>
                  <p>Client</p>
                </div>
                <div>
                  <p className="text-left mr-5">
                    My younger son returns very happy with all activities
                    happening at your school every day. I am glad that my son is
                    being taught in your school. You have the motst qualified
                    teachers in the area! My daughter is very satisfied with
                    lessons of English and Math – they give her additional
                    impact for development. Thank you!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
