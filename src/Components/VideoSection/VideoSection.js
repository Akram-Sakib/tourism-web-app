import React from 'react';
import "./VideoSection.css";
import { Parallax } from "react-parallax";
import bgImg from './../../images/video-one-bg.jpg';
import { Col, Container, Row } from 'react-bootstrap';

import deerIcon from './../../images/4icon/002-deer.png';
import paraglidingIcon from './../../images/4icon/001-paragliding.png';
import mountainIcon from './../../images/4icon/004-mountain.png';
import hangGlidingIcon from "./../../images/4icon/003-hang-gliding.png";


const VideoSection = () => {


    return (
      <section className="video_section">
        <Parallax className="bg_parrallax" bgImage={bgImg} strength={500}>
          <Container>
            <div className="video_section_inner">
              <Row>
                <Col md={6}>
                  <div className="video_section_left">
                    <div className="video_link">
                      <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ&ab_channel=LogicalSearcher">
                        <div className="video_icon">
                          <i class="fas fa-play"></i>
                          <i className="ripple"></i>
                        </div>
                      </a>
                    </div>
                    <p className="video_left_tagline">
                      Are you ready to travel?
                    </p>
                    <h2 className="vide_left_title">
                      Tevily is a World Leading Online Tour Booking Platform
                    </h2>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="video_section_right">
                    <ul className="video_four_icon_box">
                      <li>
                        <div className="video_icon_box">
                          <img src={deerIcon} alt="" />
                        </div>
                        <h4 className="video_icon_box_title">
                          <a href="/wildLife">
                            Wildlife
                            <br />
                            Tours
                          </a>
                        </h4>
                      </li>
                      <li>
                        <div className="video_icon_box">
                          <img src={paraglidingIcon} alt="" />
                        </div>
                        <h4 className="video_icon_box_title">
                          <a href="/wildLife">
                            Paragliding <br />
                            Tours
                          </a>
                        </h4>
                      </li>
                      <li>
                        <div className="video_icon_box">
                          <img src={mountainIcon} alt="" />
                        </div>
                        <h4 className="video_icon_box_title">
                          <a href="/wildLife">
                            Adventure <br />
                            Tours
                          </a>
                        </h4>
                      </li>
                      <li>
                        <div className="video_icon_box">
                          <img src={hangGlidingIcon} alt="" />
                        </div>
                        <h4 className="video_icon_box_title">
                          <a href="/wildLife">
                            Hang Gliding <br />
                            Tours
                          </a>
                        </h4>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Parallax>
      </section>
    );
};


export default VideoSection;