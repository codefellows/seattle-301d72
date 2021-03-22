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

class LrgProj extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
 
        <>
        <img class="card sml-img card-lift--hover" src={this.props.imge} />
            <h2 class="lrg-title">{this.props.title}</h2> 
                <p class="lrg-txt">{this.props.desc}</p>
                <ul class="points">
                    <li class="point1">{this.props.points[0]}</li>
                    <li class ="point2">{this.props.points[1]}</li>
                </ul>
        </>
    );

  }
}

export default LrgProj;
