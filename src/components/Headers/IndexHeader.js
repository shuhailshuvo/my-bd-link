import React from "react";
import { Container } from "reactstrap";

function IndexHeader({ text }) {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">{text.title}</h1>
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/clouds.png") + ")"
          }}
        />
        <h6 className="category category-absolute">{text.subTitle}</h6>
      </div>
    </>
  );
}

export default IndexHeader;
