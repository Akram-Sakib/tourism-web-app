import React from "react";
import "./MobileNav.css";
import logo from "./../../images/logo-1.png";

const MobileNav = () => {
  return (
    <div className="mobile-nav__wrapper">
        {/* expanded */}
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fas fa-times"></i>
        </span>
        <div className="logo-box">
          <a href="/home">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li className="dropdown currnet">
              <a href="/home">
                Home
                <button>
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
            </li>
            <li className="dropdown">
              <a href="/hello">
                Destinations
                <button aria-label="dropdown toggler">
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
              <ul>
                <li>
                  <a href="/destinations">Destinations</a>
                </li>
                <li>
                  <a href="/details">Destination Details</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="/home">
                Tours
                <button>
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
            </li>
            <li className="dropdown">
              <a href="/home">
                Pages
                <button>
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
            </li>
            <li className="dropdown">
              <a href="/home">
                News
                <button>
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
            </li>
            <li className="dropdown">
              <a href="/home">
                Contact
                <button>
                  <i className="fas fa-angle-down"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>
        <ul className="mobile-nav__contact">
          <li>
            <i className="fas fa-envelope"></i>
            <a href="/help">needhelp@sakib.com</a>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            <a href="/help">666 888 0000</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="/a">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/a">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/a">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/a">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
