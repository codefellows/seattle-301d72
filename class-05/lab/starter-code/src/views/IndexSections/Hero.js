/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


import developerpic from "../../assets/img/developerpic.jpg";
import Logo_sml from '../../assets/img/brand/Logo_sml.jpg';

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150">&#10022;</span>
              <span className="span-50">&#10022;</span>
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" >&#10022;</span>
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src= {developerpic}
                      style={{ width: "200px" }}
                    />
                    <h1>Julien Edwards</h1>
                    <p className="lead text-white">
                      Design wit hintent. I have had a career developing digital marketing campaigns as well as B2B campaigns, and my taklaway has been get the tools best suited for the job. After brushing up on my design chops and mastering React, I have been working my way to designing my own tools. This ssttention todetail and drive to systematize will get me by.
                    </p>
                    
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *sheepishly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "30px",
                                 borderRadius: "50%" }}
          //for styling in the render, pass the css styles through as an object. also camelCase
                        src={Logo_sml}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
