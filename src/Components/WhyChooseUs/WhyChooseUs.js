import React from 'react';
import "./WhyChooseUs.css";
import icon1 from "./../../images/4icon/005-airplane.png";
import icon2 from "./../../images/4icon/006-travel-map.png";

const WhyChooseUs = () => {
    return (
      <section className="why_choose_us_section">
        <div className="why_choose_container">
          <div className="why_choose_left">
            <div className="why_choose_left_bg"></div>
            <div className="why_choose_left_toogle">
              <p> 
                Trips <br />
                &amp; tours
              </p>
            </div>
          </div>
          <div className="why_choose_right">
            <div className="why_choose_right_map"></div>
            <div className="why_choose_right_content">
              <div className="why_choose_title">
                <span className="why_choose_title_tagline">
                  Our Benifit lists
                </span>
                <h2 className="why_choose_heading_title">Why Choose Tevily</h2>
              </div>
              <p className="why_choose_right_text">
                There are many variations of passages of Lorem Ipsum is simply
                free text available in the market for you, but the majority have
                suffered alteration in some form.
              </p>
              <ul className="why_choose_list">
                <li>
                  <div className="icon">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="text">
                    <h4>Professional and Certified</h4>
                    <p>
                      Lorem ipsum is simply free text dolor sit but the majority
                      have suffered amet, consectetur notted.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="text">
                    <h4>Get Instant Tour Bookings</h4>
                    <p>
                      Lorem ipsum is simply free text dolor sit but the majority
                      have suffered amet, consectetur notted.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChooseUs;