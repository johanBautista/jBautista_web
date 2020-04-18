import React from 'react';
import './Curriculum.css';
import { Carousel } from 'react-bootstrap';
import foto1 from '../../img/b-cv3.jpg';
import foto2 from '../../img/home.jpg';
import foto3 from '../../img/wolfgang-hasselmann-WrLY3abIUyU-unsplash.jpg';
import Languages from './languages/Languages';
import Technologies from './technologies/Technologies';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import bbdd from '../../img/bbdd.png';
import imgHome from '../../img/home.jpg';

const Curriculum = () => {
  return (
    <section>
      <section className=" container ">
        <div className="image-about">
          <div className="quote-curriculum">
            <h2>Soy soñador un guerrero, ahora sé a que me quiero dedicar.</h2>
            {/* <i>
              I am a decisive person who likes to share and learn from other
              professionals dedicated to digital projects, I like agile
              methodologies as well as development in MERN and MEAN Stack
            </i> */}
          </div>
        </div>
      </section>

      <section className="container-lg">
        <div className="sect-experience">
          <h3>Experience</h3>
          <div className="justify-carrusel">
            <section className="carrusel">
              <Carousel className="container-small">
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Aha! Moment</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto2}
                    alt="Secondd slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Aha! Moment</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <h4 className="carrusel-title"> Aha! Moment </h4>
              <small>Oct 2019 – Nov 2019</small>
              <p className="carrusel-description">
                Where your ideas can generate changes. Aha Moment is an app
                where users can register their best ideas.
              </p>
              <small>ReactJS, MongoDB,NodeJS,ExpressJS,CSS</small>
            </section>

            <section className="carrusel">
              <Carousel className="container-small">
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>OkToPlay</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto2}
                    alt="Secondd slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>OkToPlay</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <h4 className="carrusel-title">OkToPlay</h4>
              <small>Aug 2019 – Sep 2019</small>
              <p className="carrusel-description">
                OkToPlay is an application that connects Music Bands with local
                Establishments and lists all the upcoming Events in Town.
              </p>
              <small>
                NodeJS, MongoDB, ExpressJS, SASS, Handlebars, Git colaborative.
              </small>
            </section>

            <section className="carrusel">
              <Carousel className="container-small">
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Lucky</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto2}
                    alt="Secondd slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 size-img"
                    src={foto3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Lucky</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <h4 className="carrusel-title">Lucky</h4>
              <small>Jun 2019 – Jul 2019 </small>
              <p className="carrusel-description">
                Lucky is an arcade game clone where the avatar must avoid snakes
                and eat sushi. This work is created with Js DOM and POO
              </p>
              <small>Javascript, Canvas, HTML, CSS</small>
            </section>
          </div>
        </div>

        <div className="sect-education">
          <h2 className="">Education</h2>
          <div className="education">
            <div className="education-info">
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
            </div>
            <div className="foto-section">
              <img src={imgHome} alt="cambio" className="foto-cambio" />
            </div>
          </div>
        </div>

        <div className="sect-techn">
          <h3>Technologies</h3>
          <Link>
            <Technologies className="card-skill" />
          </Link>
        </div>

        <div className="sect-languages">
          <h2 className="">Languages</h2>
          <div className="languages">
            <div className="foto-section">
              <img src={imgHome} alt="cambio" className="foto-cambio" />
            </div>
            <div className="education-info">
              <Languages />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Curriculum;
