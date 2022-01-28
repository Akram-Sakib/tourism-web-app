import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import "./Header.css";

const Header = () => {

  const [isActive, setActive] = useState(false);
  const [changeIcon, setChangeIcon] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="header_top d-sm-none d-md-block">
        <div className="container">
          <Row>
            <Col md={7}>
              <div className="d-flex h-100 align-items-center">
                <div className="phone_left">
                  <i class="fas fa-phone"></i>
                  <span>+ 92 666 999 0000</span>
                </div>
                <div className="mail_right">
                  <i class="fas fa-at"></i>
                  <span>needhelp@company.com</span>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="d-flex h-100 align-items-center">
                <div className="social_top">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-dribbble"></i>
                </div>
                <div className="guider">
                  <span>BECOME A LOCAL GUIDE</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="header_bottom">
        <div
          className={isActive ? "menu-toggle" : "menu-toggle"}
          onClick={toggleClass}
          id="hamburger"
        >
          <i
            className={changeIcon ? "fas fa-bars" : "fas fa-times"}
            onClick={() =>
              changeIcon ? setChangeIcon(false) : setChangeIcon(true)
            }
          ></i>
        </div>
        <div className={isActive ? "overlay menu-open" : "overlay"}></div>
        <div className="container">
          <nav className={isActive ? "menu-open" : null}>
            <h1 className="brand">
              <a href="index.html">
                To<span>u</span>r
              </a>
            </h1>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/destination">Destination</a>
              </li>
              <li>
                <a href="/tours">Tours</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;