import React from "react";
import "./Tours.css";
import { Col, Row } from "react-bootstrap";
import popularImg1 from "./../../images/Popular-tours/popular-tours__img-1.jpg";
import popularImg2 from "./../../images/Popular-tours/popular-tours__img-2.jpg";
import popularImg3 from "./../../images/Popular-tours/popular-tours__img-3.jpg";
import popularImg4 from "./../../images/Popular-tours/popular-tours__img-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Tours = () => {
  return (
    <section className="tours_section">
      <div className="tours__container">
        <div className="tours_title text-center">
          <span>Featured tours</span>
          <h2>Most Popular Tours</h2>
        </div>
        <Row>
          <Swiper
            effect={"fade"}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            pagination={{ clickable: true }}
            slidesPerView={4}
            onSlideChange={() => {
              console.log("slide change");
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className="popular_tour_swiper"
          >
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg2} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg2} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg1} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg2} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg3} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
            <SwiperSlide>
              <Col md={3}>
                <div className="popular_tours_single">
                  <div className="popular_tours_img">
                    <img src={popularImg4} alt="" />
                    <div className="popular_tours_icon">
                      <a href="/icon">
                        <i class="fas fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="popular_tours_content">
                    <div className="popular_tours_stars">
                      <i class="fas fa-star"></i>
                      8.0 Superb
                    </div>
                    <h3 className="popular_tours_title">
                      <a href="/details">National Park 2 Days Tour</a>
                    </h3>
                    <div className="popular_tours_rate">
                      <span>$1870</span>/ Per Person
                    </div>
                    <ul className="popular_tours_meta">
                      <li>
                        <a href="/tourdetails.html">3 Days</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">12+</a>
                      </li>
                      <li>
                        <a href="/tourdetails.html">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </SwiperSlide>
          </Swiper>
        </Row>
      </div>
    </section>
  );
};

export default Tours;
