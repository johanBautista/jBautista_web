import React from 'react';
import { Carousel } from 'react-bootstrap';
import foto1 from '../../../img/b-cv3.jpg';
import foto2 from '../../../img/home.jpg';

const Carrusel = () => {
  return (
    <div>
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
                src={foto1}
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
            Where your ideas can generate changes. Aha Moment is an app where
            users can register their best ideas.
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
                src={foto1}
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
                src={foto1}
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
            Lucky is an arcade game clone where the avatar must avoid snakes and
            eat sushi. This work is created with Js DOM and POO
          </p>
          <small>Javascript, Canvas, HTML, CSS</small>
        </section>
      </div>
    </div>
  );
};

export default Carrusel;
