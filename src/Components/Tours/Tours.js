import React from "react";
import "./Tours.css";
import { Col, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import popularImg2 from "./../../images/Popular-tours/popular-tours__img-2.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Tours = () => {
  return (
    <section className="tours_section">
      <div className="tours__container">
        <div className="tours_title text-center">
          <span>Featured tours</span>
          <h2>Most Popular Tours</h2>
        </div>
        <Row>
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
        </Row>
      </div>
    </section>
  );
};

export default Tours;
