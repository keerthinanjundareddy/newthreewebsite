import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./Scrollspy";

import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  handleNavLinkClick = (event, sectionID) => {
    event.preventDefault();

    // Additional logic if needed
    // For example, you can manually scroll to the section here

    // Example: Scroll to the section manually
    const scrollTargetPosition =
      document.getElementById(sectionID).offsetTop -
      (this.props.headerBackground
        ? document.querySelector("div[data-nav='list']").scrollHeight
        : 0);
    window.scrollTo({
      top: scrollTargetPosition,
      behavior: "smooth",
    });
  };

  renderLogo = () => {
    const { imglight } = this.props;
    return (
      <NavbarBrand className="navbar-brand logo text-uppercase" href="/">
        <img src={imglight ? logolight : logodark} alt="" height="22" />
      </NavbarBrand>
    );
  };

  render() {
    const { isOpenMenu } = this.state;
    const { top, navClass, imglight, navItems } = this.props;

    let targetId = navItems.map((item) => item.idnm);

    return (
      <React.Fragment>
        <Navbar
          expand="lg"
          fixed={top ? "top" : ""}
          className={`${navClass} navbar-custom sticky sticky-dark`}
          id="navbar"
        >
          <Container>
            {this.renderLogo()}
            <NavbarToggler onClick={this.toggle}>
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={isOpenMenu}
              className="navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav className="navbar-nav ml-auto navbar-center" id="navbar-navlist">
                  {navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={`#${item.idnm}`}
                        onClick={(e) => this.handleNavLinkClick(e, item.idnm)}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link">
                    Log In
                  </Link>
                </li>
                <li className="nav-item d-inline-block d-lg-none">
                  <Link to="/SignUp" className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
              <div className="navbar-button d-none d-lg-inline-block">
                <Link
                  to="/SignUp"
                  className="btn btn-sm btn-soft-primary btn-round"
                >
                  Sign Up
                </Link>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavbarPage;