import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navbar">
        <Navbar.Brand href="#home" className="ml-5">
          {props.title} - Bookshelf
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link className="links">Home</Nav.Link>
            <Nav.Link className="links">About</Nav.Link>
            <Nav.Link className="links">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;