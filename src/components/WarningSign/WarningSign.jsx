import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container } from "react-bootstrap";

class MyAlert extends Component {

  toggle() {
    this.setState({
      visible: !this.state.visible
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      visible: true
    };
}
  render() {
    return (
      <>
        <Container className="mt-5">
          {this.state.visible === true && <Alert variant="danger" onClose={() => this.toggle(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
            {this.state.text}
        </p>
          </Alert>}
        </Container>
      </>
    );
  }
}

export default MyAlert;