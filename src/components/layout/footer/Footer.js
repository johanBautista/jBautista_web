import React from 'react';
import linkedin from '../../img/linkedin.png';
import github from '../../img/git-icon.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom text-white">
        <span className="mx-auto d-block ">&copy; Johan Bautista</span>
        <Link
          to="https://www.linkedin.com/in/johan-bautista-parra/"
          target="_blank"
          className="style-icon"
        >
          <img src={linkedin} alt="logo" className="style-icon" />
        </Link>
        <Link
          to="https://github.com/johanBautista"
          target="_blank"
          className="style-icon"
        >
          <img src={github} alt="logo" className="style-icon" />
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
