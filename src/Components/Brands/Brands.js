import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "./Brands.css";
import brand1 from "./../../images/Brands/brand-one-1.png";
import brand2 from "./../../images/Brands/brand-one-2.png";
import brand3 from "./../../images/Brands/brand-one-3.png";
import brand4 from "./../../images/Brands/brand-one-4.png";
import brand5 from "./../../images/Brands/brand-one-5.png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Brands = () => {
  return (
    <section className="brand_section">
      <div className="brand_bg_shape"></div>
      <Container>
        <Row>
          <Col md={3}>
            <div className="brand_section_title">
              <h2>Our Partners</h2>
            </div>
          </Col>
          <Col md={9}>
            <div className="brand_main_content">
              <Swiper
                effect={"fade"}
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                }}
                loop={true}
                spaceBetween={100}
                // breakpoints={{
                //   0: {
                //     spaceBetween: 30,
                //     slidesPerView: 2,
                //   },
                //   375: {
                //     spaceBetween: 30,
                //     slidesPerView: 2,
                //   },
                //   575: {
                //     spaceBetween: 30,
                //     slidesPerView: 3,
                //   },
                //   767: {
                //     spaceBetween: 50,
                //     slidesPerView: 4,
                //   },
                //   991: {
                //     spaceBetween: 50,
                //     slidesPerView: 5,
                //   },
                //   1199: {
                //     spaceBetween: 50,
                //     slidesPerView: 5,
                //   },
                // }}
                slidesPerView={5}
                onSlideChange={() => {
                  console.log("slide change");
                }}
                onSwiper={(swiper) => console.log(swiper)}
                className="brand_swiper_carousel"
              >
                <SwiperSlide>
                  <img src={brand1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={brand2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={brand3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={brand4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={brand5} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
