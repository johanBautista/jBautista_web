import React from 'react';
import './Curriculum.css';
import Languages from './languages/Languages';
import Technologies from './technologies/Technologies';

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
          <div className="education foto-block"></div>
        </div>
      </section>

      <div className="sect-techn stack-section">
        <h3>Technologies</h3>

        <Technologies className="card-skill" />
      </div>
      <section className="container-lg">
        <div className="sect-languages">
          <div className="languages">
            <img src={imgLanguages} alt="cambio" className="foto-language" />
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
