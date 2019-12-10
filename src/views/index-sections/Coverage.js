import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Coverage({ text }) {
  return (
    <>
      <div className="section" id="coverage">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Our Coverage</h2>
              <p className="description">
                {text.coverage}
                <br />
                <br />
                <img
                  src={require("../../assets/img/map.PNG")}
                  alt="coverage"
                  style={{ width: "100%" }}
                />
              </p>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="5"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Coverage;
