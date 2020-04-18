import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

// import linkedin from '../../img/linkedin.png';
// import github from '../../img/git-icon.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <div className="container-fluid">
      <Navbar className="fixed-top" collapseOnSelect expand="lg">
        <Navbar.Brand href="/">
          {/* <FontAwesomeIcon className='icon-logo'
            icon={faUserAstronaut}
            size="1x"
            // style={{ color: '#3398DB' }}
          /> */}
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
              Portf
            </Nav.Link>
            <Nav.Link className="item-bar" href="/cv">
              About
            </Nav.Link>
            <Nav.Link className="item-bar" href="/contact">
              Contact
            </Nav.Link>
            {/* <Nav.Link
              href="https://www.linkedin.com/in/johan-bautista-parra/"
              target="_blank"
            >
              <img src={linkedin} alt="logo" className="style-icon" />
            </Nav.Link> */}
            {/* <Nav.Link href="https://github.com/johanBautista" target="_blank">
              <img src={github} alt="logo" className="style-icon" />
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <i>nav start</i> */}
    </div>
  );
};

export default navbar;
