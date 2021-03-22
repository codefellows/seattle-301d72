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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import landing from "assets/img/theme/landing.jpg";
import profile from "assets/img/theme/profile.jpg";

class SmlProj extends React.Component {
  constructor(props){
    super(props);
    this.state = {big: this.props.size};
  }
    


  render() {
    console.log("props: " + this.props.img);
    return (
        
        <div class="card sml-prj card-lift--hover">
        <img class="card-img-top smlimg" size="300px" src={this.props.img}  />
        <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="sml-title card-text" >{this.props.desc}</p>
                </div>
        </div>
        
    );

  }
}

export default SmlProj;
