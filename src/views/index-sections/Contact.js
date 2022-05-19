import React from "react";
import { Container, Row, Col } from "reactstrap";

function Contact({ text }) {
  return (
    <>
      <div className="section section-dark" id="contact">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Contact Us</h2>
              <p className="description">{text.contact.details}</p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p className="description">
                <br />
                <hr />
                <br />
                Phone: {text.contact.phone},<br />
                email: {text.contact.email},<br />
                House: {text.contact.house},<br />
                Road:{text.contact.road},
                <br />
                Block:{text.contact.block},
                <br />
                {text.contact.area}
                <br />
                {text.contact.country}
              </p>
            </Col>
          </Row>
          <Row style={{ height: 250 }}></Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
