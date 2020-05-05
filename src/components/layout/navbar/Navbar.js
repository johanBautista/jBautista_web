import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const navbar = () => {
  return (
    <div className="container-fluid">
      <Navbar className="fixed-top" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          <h4 className="nombreLogo">Johan Bautista</h4>
          <sup className="sup">DEV</sup>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navigation-bar">
            <Nav.Link className="item-bar" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="item-bar" href="/projects">
              Portfolio
            </Nav.Link>
            <Nav.Link className="item-bar" href="/cv">
              About
            </Nav.Link>
            <Nav.Link className="item-bar" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default navbar;
