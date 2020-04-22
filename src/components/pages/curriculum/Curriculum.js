import React from 'react';
import './Curriculum.css';
import Languages from './languages/Languages';
import Technologies from './technologies/Technologies';
import { Link } from 'react-router-dom';

import imgHome from '../../img/home.jpg';
import imgLanguages from '../../img/languages.jpg';
import Carrusel from './carrusel/Carrusel';

const Curriculum = () => {
  return (
    <section>
      <section className=" container ">
        <div className="image-about">
          <h2 className="quote">WORK HARD DREAM BIG</h2>
        </div>
      </section>

      <section className="container-lg">
        <div className="sect-experience">
          <h3>Experience</h3>
          <Carrusel />
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
            </div>
            <img src={imgHome} alt="cambio" className="foto-block" />
          </div>
        </div>

        <div className="sect-techn">
          <h3>Technologies</h3>
          <Link>
            <Technologies className="card-skill" />
          </Link>
        </div>

        <div className="sect-languages">
          <div className="languages">
            <img src={imgLanguages} alt="cambio" className="foto-block" />
            <div className="education-info">
              <h2 className="titulo">Languages</h2>
              <Languages />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Curriculum;
