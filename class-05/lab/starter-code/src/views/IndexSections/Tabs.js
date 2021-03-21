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
// nodejs library that concatenates classes
import classnames from "classnames";
import stylesheet from '../../assets/vendor/nucleo/css/nucleo.css'
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
    open: true,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    console.log(this.state.open)
    this.setState({
      [state]: index
    });
  };

  
  render() {
    return (
      <>
        <h3 className="h4 text-success font-weight-bold mb-4">Tabs</h3>
        <Row className="justify-content-center">
          <Col lg="6">
            {/* Tabs with icons */}
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                With icons
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Messages
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <p className="description">
                     Home is where the heart is, and my heart could use a vacation. This past year, while stressful has been a great time to
                     polish my skills and take things to the next level. My background coming from sales, and marketing give me a good overview
                     of what I need and when. 
                    </p>
                    <p className="description">
                      Diving deep into the call stack to under stand the where whens and hows of Javascript has left me a little sparse on 
                      early knowledge, but I am catching up fast. 
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Born in NY, CA since HS. While a log of my early exposure was aroudn the entertainment field, technology always held an 
                      interest for me. Left me with connections both to the tech  world up north and the entertainment world down here. 
                      Now I want to take my engineering to the next level and focus on the technologies that allow us to reach one another. 
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <ul className="description">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JS</li>
                      <li>React</li>
                      <li>postgreSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className={`mt-5 mt-lg-0 ${!this.state.open ? "collapse" : ""}`} lg="6">
            {/* school section */}
            <div className= "mb-3 text-right" style={{ alignContent: "right"}}>
              <small className="text-uppercase font-weight-bold " >
                Education
              </small>
            </div>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "open", !this.state.open)}
                    href="#pablo"
                    role="tab"
                  >
                    {this.state.open ? '>>' : <i class="ni ni-hat-3" />}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    BA
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Other
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <h2>University of California - Santa Barbara</h2>
                    <p className="description">
                      2007-2011
                      BA
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <h2>Tsuru Bunka Daigaku</h2>
                    <p className="description">
                      Dual language nevironment
                      Bleh
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
