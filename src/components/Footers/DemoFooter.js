import React from "react";
import { Row, Container } from "reactstrap";

function DemoFooter({ text }) {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} | {text.title} | All Right reserved
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
