import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

import linkedin from '../../img/linkedin.png';
import github from '../../img/git-icon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <div className="container-fluid">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="/" className="style-logo style-title">
          <FontAwesomeIcon
            icon={faUserAstronaut}
            size="2x"
            style={{ color: 'teal' }}
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cv">Curriculum</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/johan-bautista-parra/">
              <img src={linkedin} alt="logo" className="style-icon" />
            </Nav.Link>
            <Nav.Link href="https://github.com/johanBautista">
              <img src={github} alt="logo" className="style-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h2>aqui el nav</h2>

    </div>
  );
};

export default navbar;
