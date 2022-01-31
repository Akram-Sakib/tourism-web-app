import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Places.css";

const Places = () => {
  return (
    <section className="places_section">
      <Container>
        <div className="places_top_text text-center">
          <span>Destination Lists</span>
          <h2>Go Exotic Places</h2>
        </div>
        <div className="image_gallery">
          <Row className="gx-2 gy-2">
            <Col md={3}>
              <div class="place-img place-image-1 rounded-3">
                <h2>
                  <a href="/Spain">Spain</a>
                </h2>
                <button>6 TOURS</button>
              </div>
            </Col>
            <Col md={6}>
              <div class="place-img place-image-2 rounded-3">
                <h2>
                  <a href="/Thailand">Thailand</a>
                </h2>
                <p className="place_img_subtitle">Wildlife</p>
                <button>6 TOURS</button>
              </div>
            </Col>
            <Col md={3}>
              <div class="place-img place-image-3 rounded-3">
                <h2>
                  <a href="/Africa">Africa</a>
                </h2>
                <button>6 TOURS</button>
              </div>
            </Col>
            <Col md={6}>
              <div class="place-img place-image-4 rounded-3">
                <h2>
                  <a href="/Australia">Australia</a>
                </h2>
                <button>6 TOURS</button>
              </div>
            </Col>
            <Col md={6}>
              <div class="place-img place-image-5 rounded-3">
                <h2>
                  <a href="/switzerland">Switzerland</a>
                </h2>
                <p className="place_img_subtitle">Adventure</p>
                <button>6 TOURS</button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Places;
