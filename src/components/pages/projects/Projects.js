/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './Project.css';
import aha from '../../img/ah-1.png';
import lucky from '../../img/lk-1.png';
import cita from '../../img/vt-1.png';
import etiqueta from '../../img/et-1.png';
import cafe from '../../img/cc-1.png';
import okey from '../../img/okey.png';
import pt2 from '../../img/pt2.png';

const Projects = () => {
  return (
    <div className="container perreo">
      <h3>Projects start</h3>

      <CardColumns>
        <a href="http://okeytoplay.herokuapp.com/" className="img__wrap">
          <Card className="p-3 text-card">
            <Card.Img variant="top" src={okey} className="figure" />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>ok to play</h2>
                <p>App for Musicians</p>
              </div>
            </div>
          </Card>
        </a>

        <a href="https://aha-moment.netlify.com/" className="img__wrap">
          <Card className="text-card  ">
            <Card.Img variant="top" src={aha} className="figure caja" />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Aha! Moment</h2>
                <p>Write your ideas</p>
              </div>
            </div>
          </Card>
        </a>

        <a href="https://johanbautista.github.io/GAME/" className="img__wrap">
          <Card className="text-card">
            <Card.Img variant="top" src={lucky} className="img__wrap" />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>LUCKY</h2>
                <p>Arcade Game</p>
              </div>
            </div>
          </Card>
        </a>

        <a
          href="https://jb-citas-veterinaria.netlify.com/"
          className="img__wrap"
        >
          <Card className="text-card">
            <Card.Img variant="top" src={cita} className="img__wrap" />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Appointments</h2>
                <p>React Practice</p>
              </div>
            </div>
          </Card>
        </a>

        <a href="https://www.youtube.com/watch?v=EsLn2nKQduc">
          <Card bg="dark" text="white" className="text-center p-3 img__wrap">
            <Card.Title> Work hard, dream big</Card.Title>
            <div className="img__description_layer">
              <div className="img__description">
                <h3>Boletaire!</h3>
              </div>
            </div>
          </Card>
        </a>

        <a
          href="https://www.youtube.com/watch?v=OBLu5CItsCQ"
          className="img__wrap"
        >
          <Card className="text-card">
            <Card.Img variant="top" src={etiqueta} />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Etiquetas</h2>
                <p>Performance. Meri Caballero</p>
              </div>
            </div>
          </Card>
        </a>

        <a
          href="https://www.youtube.com/watch?v=PQKWb62JsAg"
          className="img__wrap"
        >
          <Card className="text-card">
            <Card.Img variant="top" src={cafe} />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Cafe Central</h2>
                <p>Video Marketing</p>
              </div>
            </div>
          </Card>
        </a>

        <a
          href="https://www.behance.net/gallery/94458879/Responsive-Web-freeCodeCamp"
          className="img__wrap"
        >
          <Card className="text-card">
            <Card.Img variant="top" src={pt2} />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Web Responsive</h2>
                <p>Certicated freeCodeCamp</p>
              </div>
            </div>
          </Card>
        </a>

        <a className="img__wrap">
          <Card className="text-card">
            <Card.Img variant="top" src="holder.js/100px160" />
            <div className="img__description_layer">
              <div className="img__description">
                <h2>Cafe Central</h2>
                <p>Video Marketing</p>
              </div>
            </div>
          </Card>
        </a>

        <Card className="p-3 text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>10</Card.Title>
        </Card>

        <Card className="text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>11</Card.Title>
        </Card>

        <Card bg="primary" text="white" className="text-center p-3 text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>12</Card.Title>
        </Card>

        <Card className="text-center text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>13</Card.Title>
        </Card>

        <Card className="text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>14</Card.Title>{' '}
        </Card>

        <Card className="text-right text-card ">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>15</Card.Title>
        </Card>

        <Card className="text-card">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Title>16</Card.Title>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Projects;
