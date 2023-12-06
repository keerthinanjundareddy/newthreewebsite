import React, { Component } from "react";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";

import Section from "./Section";
import Services from "../../component/Services";
import Pricing from "../../component/Pricing";
import Team from "../../component/Team";
import Clients from "../../component/Clients";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true
    };
  }
  fetchNavItems = async () => {
    try {
      const response = await fetch(
        "https://ayathanapayload.payloadcms.app/api/WebsiteNavbar?locale=undefined&draft=false&depth=1"
      );
      const data = await response.json();
      console.log("nvbardata",data)
      this.setState({ navItems: data.docs.reverse() });
    } catch (error) {
      console.error("Error fetching navigation items:", error);
    }
  };


  componentDidMount() {
    this.fetchNavItems();
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />

          {/* Importing Section */}
          <Section />

           {/* Importing Service */}
           <Services />

          {/* Importing Pricing */}
          {/* <Pricing /> */}

          {/* Importing Team */}
          <Team />

          {/* Importing Clients */}
          <Clients />

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
      </React.Fragment>
    );
  }
}
export default Layout1;
