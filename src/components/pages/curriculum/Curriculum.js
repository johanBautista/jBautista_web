import React from 'react';
import './Curriculum.css';
import { Carousel } from 'react-bootstrap';
import foto1 from '../../img/b-cv3.jpg';
import foto2 from '../../img/home.jpg';
import foto3 from '../../img/wolfgang-hasselmann-WrLY3abIUyU-unsplash.jpg';
import Languages from './languages/Languages';
// import { Link } from 'react-router-dom';

const Curriculum = () => {
  return (
    <section>
      <section className="image-about">
        <div className="container">
          <div className="quote-curriculum">
            <h4>About me</h4>
            <i>
              Soy soñador, soy guerrero, soy amigo y padre. Hace 1 año conoci el
              desarrollo y ahora se a qué me quiero dedicar.
            </i>
            {/* <i>
              I am a decisive person who likes to share and learn from other
              professionals dedicated to digital projects, I like agile
              methodologies as well as development in MERN and MEAN Stack
            </i> */}
          </div>
        </div>
      </section>
      <section className="container-lg">
        <section className="containero">
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
        </section>
        <section className="containero">
          <h3>Technologies</h3>
        </section>
        <section className="containero">
          <h3>Education</h3>
          <h4>Ironhack</h4>
          <p>Stack Developer Part time Bootcamp graduation2019 – 2019</p>
          <h4>Universitat Oberta de Catalunya</h4>
          <p> Grado en Multimedia graduation 2016 – 2018</p>
          <h4>IES Mare de Déu La Merce </h4>
          <p>Grade CFGS Sonido graduation 2011 – 2013</p>
          <h4>IES Sta. Eulalia</h4>
          <p>
            Grade CFGS Realizador Audiovisual y Espectáculos graduation2008 –
            2010
          </p>
        </section>
        <section className="containero">
          <h3>languages</h3>
          <Languages />
        </section>
      </section>
    </section>
  );
};

export default Curriculum;
