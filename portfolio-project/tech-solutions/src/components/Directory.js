import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create state data to indicate the selected image
      imageSelected: null,
    };
  }
  // method to update the state if the image is selected.
  selectImage(service) {
    this.setState({ imageSelected: service });
  }

  // method to render the selected image
  renderSelectedImage(service) {
    if (service) {
      return (
        <Card className="x3">
          <CardImg top src={service.image} alt={service.name} />
          <CardBody>
            <CardTitle> {service.name} </CardTitle>
            <CardText> {service.description} </CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    // iterate throught the array of objects, services that was passed from the parent App.js
    const directory = this.props.services.map((service) => {
      return (
        <div key={service.id} className="col-md-4 m-3">
          <Card onClick={() => this.selectImage(service)}>
            <CardImg
              width="100%"
              height="250px"
              src={service.image}
              alt={service.name}
            />
            <CardImgOverlay>
              <CardTitle>{service.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row x1">{directory}</div>
        <div className="row x2">
          <div className="col-10">
            {/* render the selected image by passing the state date (imageSelected) as an argumnt for the renderSelectedImage method */}
            {this.renderSelectedImage(this.state.imageSelected)}
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
