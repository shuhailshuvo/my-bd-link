import React from "react";
import { Row, Col, Button, Container } from "reactstrap";

function Packages({ text }) {
  return (
    <>
      <div className="section section-navigation" id="packages">
        <Container className="tim-container">
          <div className="title">
            <h3>Our Packages</h3>
          </div>
          <Row>
            {text.packages.map(pkg => (
              <Col md="3">
                <div className="info" style={{ textAlign: "center" }}>
                  <div className="icon icon-info">
                    <i
                      className="nc-icon nc-trophy"
                      style={{ color: pkg.color }}
                    />
                  </div>
                  <div className="description">
                    <h4 className="info-title" style={{ color: pkg.color }}>
                      {pkg.title}
                    </h4>
                    <p className="description">{pkg.details}</p>
                    <Button className="btn-link" color="info" href="#pablo">
                      {pkg.price}
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Packages;
