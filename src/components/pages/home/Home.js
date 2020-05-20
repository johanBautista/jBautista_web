import React from 'react';
import { Button, Form } from 'react-bootstrap';
import imgAboutme from '../../img/aboutme.jpg';
import imgWhyme from '../../img/whyme.jpg';
import './Home.css';
import Technologies from '../curriculum/technologies/Technologies';
import Carrusel from '../curriculum/carrusel/Carrusel';

const Home = () => {
  return (
    <div>
      <div className="img-home">
        <div className="text-center container">
          <h1 className="title-home">Frontend Developer</h1>

          <div className="line-style"></div>
          <p>
            - Javascript, MongoDB, Express, React, Node.js, HTML, CSS, ES6,
            Typescript, Angular -
          </p>
          <Button variant="dark">My Experience</Button>
        </div>
      </div>
      <p className="footer-img">foto de unsplash</p>

      {/* /////////////// */}
      <div className="container">
        <div className="about-section">
          <div className="display-home">
            <div className="about-info">
              <h2 className="">About me</h2>
              <p>
                ♦︎ After working as an audiovisual technician I decided to
                deepen the bases of Frontend and Backend development and
                integrate my knowledge to web development
              </p>
              <p>
                ♦︎ I am a decisive person who likes to share and learn from
                other professionals dedicated to digital projects, I like agile
                methodologies as well as development in MERN and MEAN Stack
              </p>
              <p>
                ♦︎ Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
              <p>
                ♦︎ Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
            </div>
            <img src={imgAboutme} alt="cambio" className="foto-about" />
          </div>
        </div>

        <div className="stack-section">
          <h2 className="">Technologies</h2>
          <Technologies />
        </div>

        <div className="why-section">
          <div className="display-home">
            <img src={imgWhyme} alt="cambio" className="foto-why" />
            <div className="why-info">
              <h2 className="titulo">Why me?</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia, Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nesciunt quia,
                cupiditate ullam asperiores officia.abs
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <h2>Projects</h2>
          <Carrusel />
        </div>
      </div>
    </div>
  );
};

export default Home;
