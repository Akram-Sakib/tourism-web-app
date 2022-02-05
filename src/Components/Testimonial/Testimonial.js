import React from 'react';
import "./Testimonial.css";
import shape2 from './../../images/testimonial-one-shape-2.png';
import shape3 from './../../images/testimonial-one-shape-3.png';
import { Col, Container, Row } from 'react-bootstrap';
import testimonialImg1 from './../../images/Testimonials/testimonial-one-img-1.png';
import testimonialImg2 from './../../images/Testimonials/testimonial-one-img-2.png';
import testimonialImg3 from './../../images/Testimonials/testimonial-one-img-3.png';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


const Testimonial = () => {
    return (
      <section className="testimonial_section">
        <div className="testimonial_shape_2 float-bob-y">
          <img src={shape2} alt="" />
        </div>
        <div className="testimonial_shape_3 animated slideInRight">
          <img src={shape3} alt="" />
        </div>
        <Container>
          <div className="section_title text-center">
            <span className="section_title_tagline">
              Testimonial &amp; reviews
            </span>
            <h2 className="section_title_title">What They’re Saying</h2>
          </div>
          <Row>
            <Col md={12}>
              <Swiper
                effect={"fade"}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 5000,
                }}
                loop={true}
                pagination={{ clickable: true }}
                slidesPerView={3}
                onSlideChange={() => {
                  console.log("slide change");
                }}
                onSwiper={(swiper) => console.log(swiper)}
                className="testimonial_swipper"
                spaceBetween={20}
              >
                <SwiperSlide>
                  <div className="testimonial_single">
                    <div className="testimonial_img">
                      <img src={testimonialImg1} alt="" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_top_review_box">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p className="testimonial_text">
                        This is due to their best service, pricing and customer
                        support. It’s throughly refresing to such a personal
                        touch. Duis aute irure lupsum reprehenderit.
                      </p>
                      <div className="testimonial_client_info">
                        <h3 className="testimonial_client_name">
                          Jessica Brown
                        </h3>
                        <p className="testimonial_client_title">Customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial_single">
                    <div className="testimonial_img">
                      <img src={testimonialImg2} alt="" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_top_review_box">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p className="testimonial_text">
                        This is due to their best service, pricing and customer
                        support. It’s throughly refresing to such a personal
                        touch. Duis aute irure lupsum reprehenderit.
                      </p>
                      <div className="testimonial_client_info">
                        <h3 className="testimonial_client_name">
                          Jessica Brown
                        </h3>
                        <p className="testimonial_client_title">Customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial_single">
                    <div className="testimonial_img">
                      <img src={testimonialImg3} alt="" />
                    </div>
                    <div className="testimonial_content">
                      <div className="testimonial_top_review_box">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <p className="testimonial_text">
                        This is due to their best service, pricing and customer
                        support. It’s throughly refresing to such a personal
                        touch. Duis aute irure lupsum reprehenderit.
                      </p>
                      <div className="testimonial_client_info">
                        <h3 className="testimonial_client_name">
                          Jessica Brown
                        </h3>
                        <p className="testimonial_client_title">Customer</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default Testimonial;