import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import "animate.css";
import "./Slider.css";
import "react-datepicker/dist/react-datepicker.css";

import { Col, Dropdown, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";

const Slider = () => {

  const [isVisible, setVisibility] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="slider-section">
      <Swiper
        effect={"fade"}
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        navigation
        slidesPerView={1}
        onSlideChange={() => {
          console.log("slide change");
          if (isVisible) {
            setVisibility(false);
          } else {
            setVisibility(true);
          }
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            className={
              !isVisible
                ? "slider slider-1 shrink_animation"
                : "slider slider-1"
            }
          >
            <div className="text-center">
              <h1
                className={
                  !isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeInDown"
                }
              >
                Travel &amp; Adventures
              </h1>
              <p
                className={
                  !isVisible ? "animate__animated animate__fadeInUp" : ""
                }
              >
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={
              !isVisible
                ? "slider slider-2 shrink_animation"
                : "slider slider-2"
            }
          >
            <div className="text-center">
              <h1
                className={
                  !isVisible ? "animate__animated animate__fadeInDown" : ""
                }
              >
                Travel &amp; Adventures
              </h1>
              <p
                className={
                  !isVisible ? "animate__animated animate__fadeInUp" : ""
                }
              >
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={
              isVisible ? "slider slider-3 shrink_animation" : "slider slider-3"
            }
          >
            <div className="text-center">
              <h1
                className={
                  isVisible ? "animate__animated animate__fadeInDown" : ""
                }
              >
                Travel &amp; Adventures
              </h1>
              <p
                className={
                  isVisible ? "animate__animated animate__fadeInUp" : ""
                }
              >
                Where Would You Like To Go?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="find_place">
        <div className="innerFindPlace">
          <Row className="gx-0">
            <Col md={3} className="">
              <div className="find_content rounded-start">
                <label htmlFor="keyword">Where to</label>
                <input type="text" id="keyword" placeholder="Enter keywords" />
              </div>
            </Col>
            <Col md={3}>
              <div className="find_content">
                <label htmlFor="keyword">When</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </Col>
            <Col md={3}>
              <div className="find_content">
                <label htmlFor="keyword">Type</label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Adventure
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Adventure</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Wildlife</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Sightseeing</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col md={3}>
              <div className="button_content">
                <button>Find Now</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Slider;
