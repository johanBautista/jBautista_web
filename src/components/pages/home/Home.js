import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import imgAboutme from "../../img/aboutme.jpg";
import imgWhyme from "../../img/whyme.jpg";
import "./Home.css";
import Technologies from "../curriculum/technologies/Technologies";
import Carrusel from "../curriculum/carrusel/Carrusel";
import { Animated } from "react-animated-css";

import useGaTracker from "../../../useGaTracker";

const Home = () => {
  useGaTracker();
  return (
    <Fragment>
      <div className="img-home">
        <div className="text-center container">
          <h1 className="title-home">Frontend Developer</h1>

          <div className="line-style"></div>
          <p className="skills-title">
            - Javascript, MongoDB, Express, React, Node.js, HTML, CSS, ES6, Typescript, Angular -
          </p>
          <Button
            variant="dark"
            href="projects
          "
          >
            My Experience
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="about-section">
          <div className="display-home">
            <Animated
              animationIn="fadeInLeft"
              animationInDuration={3000}
              // animationOut="fadeOut"
              isVisible={true}
            >
              <div className="about-info">
                <Animated
                  animationIn="fadeIn"
                  animationInDuration={3000}
                  // animationOut="fadeOut"
                  isVisible={true}
                >
                  <h2 className="">About me</h2>
                </Animated>

                <p>
                  Hello my name is Johan, and a year ago I started my journey in the world of web development, what you
                  will see on my website are my first projects but I am very clear that they will not be the last, in
                  this last year I have learned the evolution of the sector IT and I have also managed to develop my
                  first applications.
                </p>

                <p>
                  I have written code from the Backend to the Frontend and I am constantly researching the news, tips,
                  good practices and other tips that help improve not only my code quality but also the user experience.
                  I am not only a programmer, I have also worked as an audiovisual producer and sound technician, I come
                  from multimedia and I am sure that I can add to your company.
                </p>
                <Animated
                  animationIn="fadeInLeft"
                  animationInDuration={3000}
                  // animationOut="fadeOut"
                  isVisible={true}
                >
                  <p>
                    I am a brave person and committed to challenges, I like to share and learn from my colleagues. I
                    have a decisive and methodical profile and right now I focus on the MERN stack
                  </p>

                  <p>Thank you for visiting me, I will be happy to contribute to your projects.</p>
                </Animated>
              </div>
            </Animated>
            <Animated
              animationIn="fadeInRight"
              animationInDuration={3000}
              // animationOut="fadeOut"
              isVisible={true}
            >
              <img src={imgAboutme} alt="cambio" className="foto-about" />
            </Animated>
          </div>
        </div>
      </div>
      <div className="why-section">
        <div className="display-home">
          <img src={imgWhyme} alt="cambio" className="foto-why" />
        </div>
      </div>
      <div className="container">
        <div className="project-section" id="project">
          <h2>Projects</h2>
          <Carrusel />
        </div>
      </div>
      <div className="stack-section">
        <h2 className="">Technologies</h2>
        <Technologies />
      </div>
    </Fragment>
  );
};

export default Home;
