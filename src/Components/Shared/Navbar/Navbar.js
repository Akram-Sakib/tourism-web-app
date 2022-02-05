import React from "react";
import "./Navbar.css";
import logo from "./../../../images/logo-1.png";

const Navbar = () => {
  return (
    <header className="main-header clearfix">
      <div className="main-header__top">
        <div className="container">
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="main-header__top-address">
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="text">
                    <a href="/s">+ 92 666 999 0000</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-at"></i>
                  </div>
                  <div className="text">
                    <a href="/s">needhelp@company.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              <div className="main-header__top-right-inner">
                <div className="main-header__top-right-social">
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
                <div className="main-header__top-right-btn-box">
                  <a
                    href="/hello"
                    className="thm-btn main-header__top-right-btn"
                  >
                    Become a local guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-menu clearfix">
        <div className="main-menu-wrapper clearfix">
          <div className="container clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <a href="index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <a href="/hello" className="mobile-nav__toggler">
                    <i class="fas fa-bars"></i>
                  </a>
                  <ul className="main-menu__list">
                    <li className="dropdown current">
                      <a href="/home">Home</a>
                    </li>
                    <li className="dropdown">
                      <a href="/Destination">Destination</a>
                      <ul>
                        <li>
                          <a href="/destinations">Destinations</a>
                        </li>
                        <li>
                          <a href="/details">Destinations Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="/tours">Tours</a>
                    </li>
                    <li className="dropdown">
                      <a href="/tours">Pages</a>
                    </li>
                    <li className="dropdown">
                      <a href="/tours">News</a>
                    </li>
                    <li>
                      <a href="/tours">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <a
                  href="/hello"
                  className="main-menu__search search-toggler icon-magnifying-glass"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a href="/hello" className="main-menu__user icon-avatar">
                  <i class="far fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
