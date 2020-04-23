import React from 'react';
import github from '../../img/6github.png';
import linkedin from '../../img/7linkedin.png';
import behance from '../../img/8behance.png';
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
          <a
            href="https://github.com/johanBautista"
            target="_blank"
            className="style-icon"
          >
            <img src={github} alt="logo" className="style-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/johan-bautista-parra/"
            target="_blank"
            className="style-icon"
          >
            <img src={linkedin} alt="logo" className="style-icon" />
          </a>
          <a
            href="https://www.behance.net/johansbautist"
            target="_blank"
            className="style-icon"
          >
            <img src={behance} alt="logo" className="style-icon" />
          </a>
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
