/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";

// index sections
import Packages from "./index-sections/Packages.js";
import About from "./index-sections/About.js";
import Contact from "./index-sections/Contact.js";
import Coverage from "./index-sections/Coverage.js";
import Loading from "./index-sections/Loading.js";
import { getData } from "./data";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const data = await getData();
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {data ? (
          <>
            <IndexNavbar text={data} />
            <IndexHeader text={data} />
            <div className="main">
              <Packages text={data} />
              <About text={data} />
              <Coverage text={data} />
              <Contact text={data} />
              <DemoFooter text={data} />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default Index;
