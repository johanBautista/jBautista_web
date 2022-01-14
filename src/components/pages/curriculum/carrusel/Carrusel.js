import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import ah1 from "./imgweb/ah-1.png";
import ah2 from "./imgweb/ah-2.png";
import ah3 from "./imgweb/ah-3.png";
import ok1 from "./imgweb/ok-1.png";
import ok2 from "./imgweb/ok-2.png";
import ok3 from "./imgweb/ok-3.png";
import lk1 from "./imgweb/lk-1.png";
import lk2 from "./imgweb/lk-2.png";
import lk3 from "./imgweb/lk-3.png";

const Carrusel = () => {
  return (
    <Fragment>
      <div className="justify-carrusel">
        <section className="carrusel">
          <Carousel className="container-small">
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ah1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ah2} alt="Secondd slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ah3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <h4 className="carrusel-title"> Aha! Moment </h4>
          <small>Oct 2019 – Nov 2019</small>
          <p className="carrusel-description">
            Where your ideas can generate changes. Aha Moment is an app where users can register their best ideas.
          </p>
          <small>ReactJS, MongoDB,NodeJS,ExpressJS,CSS</small>
        </section>

        <section className="carrusel">
          <Carousel className="container-small">
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ok1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ok2} alt="Secondd slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={ok3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <h4 className="carrusel-title">OkTo-Heavy-Metal</h4>
          <small>Aug 2019 – Sep 2019</small>
          <p className="carrusel-description">
            OkToPlay is an application that connects Music Bands with local Establishments and lists all the upcoming
            Events in Town.
          </p>
          <small>NodeJS, MongoDB, ExpressJS, SASS, Handlebars, Git colaborative.</small>
        </section>

        <section className="carrusel">
          <Carousel className="container-small">
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={lk1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={lk2} alt="Secondd slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 size-img" src={lk3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
          <h4 className="carrusel-title">Lucky</h4>
          <small>Jun 2019 – Jul 2019 </small>
          <p className="carrusel-description">
            Lucky is an arcade game clone where the avatar must avoid snakes and eat sushi. This work is created with Js
            DOM and POO
          </p>
          <small>Javascript, Canvas, HTML, CSS</small>
        </section>
      </div>
    </Fragment>
  );
};

export default Carrusel;
