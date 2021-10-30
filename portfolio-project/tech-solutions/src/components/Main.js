import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./Directory";
import { SERVICES } from "../shared/services";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
      imageSelected: null,
    };
  }

  // method to update the state if the image is selected.
  selectImage(service) {
    this.setState({ imageSelected: service });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Tech Solutions</NavbarBrand>
          </div>
        </Navbar>
        <Directory services={this.state.services} />
      </div>
    );
  }
}

export default Main;
