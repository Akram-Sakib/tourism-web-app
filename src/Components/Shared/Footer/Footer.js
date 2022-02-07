import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import upArrow from "./../../../images/4icon/up-arrow.png";
import logo from "./../../../images/logo-1.png";

const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_top">
        <Container>
          <div className="footer_top_inner">
            <Row>
              <Col xl={4} lg={6} md={6}>
                <div className="footer_widget_column footer_widget_about">
                  <div className="footer_widget_about_logo">
                    <a href="#/" className="img">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <p className="footer_widget_about_text">
                    Welcome to our Trip and Tour Agency. Lorem simply text amet
                    cing elit.
                  </p>
                  <ul className="footer_widget_about_contact">
                    <li>
                      <div className="icon">
                        <a href="/fast">
                          <i class="fas fa-phone-square"></i>
                        </a>
                      </div>
                      <div className="text">
                        <a href="tel:+92-666-888-0000">+92 666 888 0000</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <a href="/fast">
                          <i class="fas fa-envelope"></i>
                        </a>
                      </div>
                      <div className="text">
                        <a href="tel:+92-666-888-0000">needhelp@company.com</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <a href="/fast">
                          <i class="fas fa-map-marker-alt"></i>
                        </a>
                      </div>
                      <div className="text">
                        <p>666 road, broklyn street new york</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6}>
                <div className="footer_widget_column footer_widget_company">
                  <h3 className="footer_widget_title">Company</h3>
                  <ul className="footer_widget_company_list">
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/about">Community Blog</a>
                    </li>
                    <li>
                      <a href="/about">Rewards</a>
                    </li>
                    <li>
                      <a href="/about">Work with us</a>
                    </li>
                    <li>
                      <a href="/about">Meet the Team</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={2} lg={6} md={6}>
                <div className="footer_widget_colum footer_widget_explore">
                  <h3 className="footer_widget_title">Explore</h3>
                  <ul className="footer_widget_explore_list">
                    <li>
                      <a href="/about">Acount</a>
                    </li>
                    <li>
                      <a href="/about">Legal</a>
                    </li>
                    <li>
                      <a href="/about">Contact</a>
                    </li>
                    <li>
                      <a href="/about">Affilitate Program</a>
                    </li>
                    <li>
                      <a href="/about">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={4} lg={6} md={6}>
                <div className="footer_widget_column footer_widget_newsletter">
                  <h3 className="footer_widget_title">Newsletter</h3>
                  <form action="" className="footer_widget_newsletter_form">
                    <div className="footer_widget_newsletter_input_box">
                      <input type="email" placeholder="Email Address" />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                  <div className="msg_response text-center"></div>
                  <div className="footer_widget_newsletter_bottom">
                    <div className="footer_widget_newsletter_bottom_icon">
                      <i class="far fa-check-circle"></i>
                    </div>
                    <div className="footer_widget_newsletter_bottom_text">
                      <p>I agree to all terms and policies</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer_bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="footer_bottom_inner">
                <div className="footer_bottom_left">
                  <div className="footer_widget_social">
                    <a href="/social">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="/social">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="/social">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="/social">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="footer_bottom_right">
                  <p>
                    @ All Copyright 2021, <a href="/cs">Bracket Web</a>
                  </p>
                </div>
                <div className="footer_bottom_left_arrow">
                  <div className="scroll_to_target scroll_to_top">
                    <img src={upArrow} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
