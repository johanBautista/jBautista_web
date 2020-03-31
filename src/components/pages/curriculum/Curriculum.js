import React from 'react';
import './Curriculum.css';
import { Carousel, ProgressBar } from 'react-bootstrap';
import foto1 from '../../img/b-cv3.jpg';
import foto2 from '../../img/home.jpg';
import foto3 from '../../img/wolfgang-hasselmann-WrLY3abIUyU-unsplash.jpg';
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
          <h3>Hard Skills</h3>
          <div className="card-skill">
            <>
              <h2>React Progress Bar</h2>
              <ProgressBar done="70" />
              <h2>css Progress Bar</h2>
              <ProgressBar done="30" />
              <h2>ingles Progress Bar</h2>
              <ProgressBar done="90" />
              <h2>java Progress Bar</h2>
              <ProgressBar done="20" />
               <h2>css Progress Bar</h2>
               <ProgressBar done="30" />
               <h2>ingles Progress Bar</h2>
               <ProgressBar done="90" />
               <h2>java Progress Bar</h2>
               <ProgressBar done="20" />
              {' '}
            </>
            {/* <Link> </Link> */}
            <ul>
              {/* <li>Javascript</li>
              <ProgressBar animated now={5} variant="success" />
              <li>HTML & CSS</li>
              <ProgressBar animated now={1} variant="info" />
              <li>MongoDB</li>
              <ProgressBar animated now={25} />
              <li>Express.js</li>
              <ProgressBar animated now={35} variant="success" />
              <li>React.js</li>
              <ProgressBar animated now={45} variant="info" />
              <li>Node.js</li>
              <ProgressBar animated now={55} />
              <li>Typescript</li>
              <ProgressBar animated now={65} />
              <li>SASS</li>
              <ProgressBar animated now={75} variant="success" />
              <li>Handlebars</li>
              <ProgressBar animated now={85} variant="info" />
              <li>ES6</li>
              <ProgressBar animated now={5} />
              <li>JQuery</li>
              <ProgressBar animated now={85} />
              <li>Git</li>
              <ProgressBar animated now={85} /> */}
            </ul>
          </div>
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
        </section>
      </section>
    </section>
  );
};

export default Curriculum;
