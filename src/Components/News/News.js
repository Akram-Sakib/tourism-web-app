import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./News.css";
import newsImg1 from './../../images/News/news-one-img-1.jpg';
import newsImg2 from './../../images/News/news-one-img-2.jpg';
import newsImg3 from './../../images/News/news-one-img-3.jpg';


const News = () => {
    return (
      <section className="news_section">
        <Container>
          <div className="news_top">
            <Row>
              <Col md={9}>
                <div className="news_top_left">
                  <div className="news_top_left_title">
                    <span className="section_title_tagline">
                      From the blog post
                    </span>
                    <h2 className="section_title">News &amp; Articles</h2>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="news_top_right">
                  <a href="#/sd" className="news_one_btn thm-btn">
                    View All posts
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="news_bottom">
            <Row>
              <Col md={4}>
                <div className="news_single">
                  <div className="news_img">
                    <img src={newsImg1} alt="" />
                    <a href="#/a">
                      <span className="news_one_plus"></span>
                    </a>
                    <div className="news_one_date">
                      <p>
                        28 <br /> <span>Aug</span>
                      </p>
                    </div>
                  </div>
                  <div className="news_content">
                    <ul className="news_one_meta">
                      <li>
                        <a href="#/h">
                          <i class="far fa-user-circle"></i>
                          Admin
                        </a>
                      </li>
                      <li>
                        <a href="#/h">
                          <i class="far fa-comments"></i>2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news_bottom_title">
                      <a href="#/t">Things to See and Do When Visiting Japan</a>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news_single">
                  <div className="news_img">
                    <img src={newsImg2} alt="" />
                    <a href="#/a">
                      <span className="news_one_plus"></span>
                    </a>
                    <div className="news_one_date">
                      <p>
                        28 <br /> <span>Aug</span>
                      </p>
                    </div>
                  </div>
                  <div className="news_content">
                    <ul className="news_one_meta">
                      <li>
                        <a href="#/h">
                          <i class="far fa-user-circle"></i>
                          Admin
                        </a>
                      </li>
                      <li>
                        <a href="#/h">
                          <i class="far fa-comments"></i>2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news_bottom_title">
                      <a href="#/t">Things to See and Do When Visiting Japan</a>
                    </h3>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news_single">
                  <div className="news_img">
                    <img src={newsImg3} alt="" />
                    <a href="#/a">
                      <span className="news_one_plus"></span>
                    </a>
                    <div className="news_one_date">
                      <p>
                        28 <br /> <span>Aug</span>
                      </p>
                    </div>
                  </div>
                  <div className="news_content">
                    <ul className="news_one_meta">
                      <li>
                        <a href="#/h">
                          <i class="far fa-user-circle"></i>
                          Admin
                        </a>
                      </li>
                      <li>
                        <a href="#/h">
                          <i class="far fa-comments"></i>2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="news_bottom_title">
                      <a href="#/t">Things to See and Do When Visiting Japan</a>
                    </h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
};

export default News;