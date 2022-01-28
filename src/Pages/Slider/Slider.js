import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "animate.css";
import "./Slider.css";

const Slider = () => {
  /* {"slidesPerView": 1, "loop": true,
    "effect": "fade",
    "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
      },
    "navigation": {
        "nextEl": ".main-slider-button-next",
        "prevEl": ".main-slider-button-prev",
        "clickable": true
    },
    "autoplay": {
        "delay": 5000
    }} */

  return (
    <div>
      <Swiper
        effect={"fade"}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slider slider-1">
            <div className="text-center">
              <h1 className="animate__animated animate__fadeInDown">
                Travel &amp; Adventures
              </h1>
              <p className="animate__animated animate__fadeInUp">
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider-2">
            <div className="text-center">
              <h1 className="animate__animated animate__fadeInDown">
                Travel &amp; Adventures
              </h1>
              <p className="animate__animated animate__fadeInUp">
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider-3">
            <div className="text-center">
              <h1 className="animate__animated animate__fadeInDown">
                Travel &amp; Adventures
              </h1>
              <p className="animate__animated animate__fadeInUp">
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
