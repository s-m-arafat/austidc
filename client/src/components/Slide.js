import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import idc1 from "../images/idc1.jpg";
import idc2 from "../images/idc2.jpg";
import idc3 from "../images/idc3.jpg";
import idc4 from "../images/idc4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={idc1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={idc2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={idc3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={idc4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
