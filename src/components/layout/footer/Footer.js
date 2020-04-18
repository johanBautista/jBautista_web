import React from 'react';
import linkedin from '../../img/linkedin.png';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import './Footer.css';
 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="navigation-left">
          <Nav.Link className="item-bar" href="/projects">
            Portfolio
          </Nav.Link>
          <Nav.Link className="item-bar" href="/cv">
            About
          </Nav.Link>
          <Nav.Link className="item-bar" href="/contact">
            Contact
          </Nav.Link>
        </div>
        <div className="navigation-center">
          <Link
            to="https://www.linkedin.com/in/johan-bautista-parra/"
            target="_blank"
            className="style-icon"
          >
            <img src={linkedin} alt="logo" className="style-icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/johan-bautista-parra/"
            target="_blank"
            className="style-icon"
          >
            <img src={linkedin} alt="logo" className="style-icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/johan-bautista-parra/"
            target="_blank"
            className="style-icon"
          >
            <img src={linkedin} alt="logo" className="style-icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/johan-bautista-parra/"
            target="_blank"
            className="style-icon"
          >
            <img src={linkedin} alt="logo" className="style-icon" />
          </Link>
        </div>
        <div className="footer-top-right">
          <p>
            Email:<span className="email"> jsbparra@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy">&copy; Johan Bautista 2020</p>
        <p>
          Team by<span className="team"> jBautista</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
