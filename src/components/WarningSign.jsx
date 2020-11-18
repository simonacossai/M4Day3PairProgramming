import React, { Component }from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Container } from "react-bootstrap";

class MyAlert extends Component {
  state = {
    visible: true
  }
  toggle(){
    this.setState({
      visible: ! this.state.visible
    })
  }
  render() {
    return (
      <>
      <Container className="mt-5">
  { this.state.visible === true &&   <Alert variant="danger" onClose={() => this.toggle(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          This is an error message! 
        </p>
      </Alert>}
        </Container>
      </>
    );
  }
}

export default MyAlert ;