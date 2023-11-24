import React, { Component } from "react";
import NavbarPage from "../../component/Navbar/NavBar";
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
      fixTop: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:4000/api/navbar?locale=undefined&draft=false&depth=1");
      
      const data = await response.json();
      console.log("navbaresponse",data.docs)

      if (data.docs) {
        this.setState({ navItems: data.docs.reverse() });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

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
        <NavbarPage
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
        <Pricing />

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
