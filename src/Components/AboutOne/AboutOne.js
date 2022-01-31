import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./AboutOne.css";
import aboutOneImg from './../../images/about-one-img-1.png';
import shpae from './../../images/about-one-shape-2.png';
import VisibilitySensor from "react-visibility-sensor";


const AboutOne = () => {

  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };

    return (
      <section className="about_one_section">
        <div className="about-one-shape-2 float-bob-y">
          <img src={shpae} alt="" />
        </div>
        <Container>
          <Row>
            <Col md={6}>
              <VisibilitySensor
                partialVisibility
                offset={{ top: 200 }}
                onChange={onChange}
              >
                <div
                  className={`about_oneLeft ${
                    isVisible ? "animate__animated animate__slideInLeft" : ""
                  }`}
                >
                  <div className="about_one_img_box">
                    <div className="about_one_img">
                      <img src={aboutOneImg} alt="" />
                    </div>
                    <div className="about_one_call">
                      <div className="about_one_call_icon">
                        <i class="fas fa-phone-alt"></i>
                      </div>
                      <div className="about_one_call_number">
                        <p>Book Tour Now</p>
                        <h4>666 888 000</h4>
                      </div>
                    </div>
                    <div className="about_one_discount">
                      <h2>30%</h2>
                      <h3>Discount</h3>
                    </div>
                  </div>
                </div>
              </VisibilitySensor>
            </Col>
            <Col md={6}>
              <div className="about_one_right">
                <div className="about_one_right_title">
                  <span>Get to know us</span>
                  <h2>Plan Your Trip with Trevily</h2>
                </div>
                <p className="about_one_right_text">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  hum randomised words which don't look even slightly.
                </p>
                <ul className="about_one_point">
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <p>Invest in your simply neighborhood</p>
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <p>Support people in free text extreme need</p>
                  </li>
                  <li>
                    <i class="fas fa-check-circle"></i>
                    <p>Largest global industrial business community</p>
                  </li>
                </ul>
                <a className="thm-btn" href="/book">
                  Book with us now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default AboutOne;