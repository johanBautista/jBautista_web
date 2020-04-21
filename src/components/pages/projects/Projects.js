/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './Project.css';

import okey from '../../img/okey.png';

const info = [
  {
    id: '1',
    titulo: 'Ok To Play',
    description: 'App for musicians',
    imagen: '0',
    url: 'http://okeytoplay.herokuapp.com/',
  },
  {
    id: '2',
    titulo: 'Aha! Moment',
    description: 'Write your ideas',
    imagen: '1',
    url: 'https://aha-moment.netlify.com/',
  },
  {
    id: '3',
    titulo: 'Lucky',
    description: 'Arcade game',
    imagen: '2',
    url: 'https://johanbautista.github.io/GAME/',
  },
  {
    id: '4',
    titulo: 'Appointments',
    description: 'React practice',
    imagen: '3',
    url: 'https://jb-citas-veterinaria.netlify.com/',
  },
  {
    id: '5',
    titulo: 'Boletaire!',
    description: 'Work hard , dream big',
    imagen: '4',
    url: 'https://www.youtube.com/watch?v=EsLn2nKQduc',
  },
  {
    id: '6',
    titulo: 'Etiquetas',
    description: 'Performance. Meri Caballero',
    imagen: '5',
    url: 'https://www.youtube.com/watch?v=OBLu5CItsCQ',
  },
  {
    id: '7',
    titulo: 'Cafe Central',
    description: 'Video Marketing',
    imagen: '6',
    url: 'https://www.youtube.com/watch?v=PQKWb62JsAg',
  },
  {
    id: '8',
    titulo: 'Web Responsive',
    description: 'Certicated freeCodeCamp',
    imagen: '7',
    url: 'https://www.behance.net/gallery/94458879/Responsive-Web-freeCodeCamp',
  },
];
console.log(info);

const Projects = () => {
  return (
    <div className="container projects">
      <h3>Projects start</h3>
      {info.map((info, i) => {
        return (
          <div key={i}>
            <div className="prueba">
              {/* <a href={info.url}>{info.titulo}</a>
              <p>{info.description}</p> */}
                <a href={info.url} className="img__wrap">
                  <Card className="p-3 text-card">
                    <Card.Img variant="top" src={okey} className="figure" />
                    <div className="img__description_layer">
                      <div className="img__description">
                        <h2>{info.titulo}</h2>
                        <p>{info.description}</p>
                        <p>{info.imagen}</p>
                      </div>
                    </div>
                  </Card>
                </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
