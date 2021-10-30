import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Directory from "./components/Directory";
import { SERVICES } from "./shared/services";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
    };
  }

  render() {
    return (
      <div className="App">
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

export default App;
