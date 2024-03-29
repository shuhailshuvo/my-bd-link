import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function About({ text }) {
  return (
    <>
      <div className="section section-dark section-nucleo-icons" id="about">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">About Us</h2>
              <br />
              <p className="description">{text.about}</p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-album-2" />
                <i className="nc-icon nc-image" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-chat-33" />
                <i className="nc-icon nc-cart-simple" />
                <i className="nc-icon nc-email-85" />
                <i className="nc-icon nc-controller-modern" />
                <i className="nc-icon nc-pin-3" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-send" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
          <Row style={{ height: 280 }}></Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default About;
