/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Project.css";
import base from "../../../services/projectos";
import learning from "../../../services/learning";
import useGaTracker from "../../../useGaTracker";

const Projects = () => {
  useGaTracker();
  return (
    <Fragment>
      <div className="container projects">
        <h3>Projects start</h3>
        <div className="grid-container">
          {base.map((base, i) => {
            return (
              <div key={i}>
                <div className="grid-item">
                  <a href={base.url} className="img__wrap" target="_blank" rel="noopener noreferrer">
                    <Card className="grid">
                      <Card.Img src={base.img} className="img" />
                      <div className="img__description_layer">
                        <div className="img__description">
                          <h2>{base.titulo}</h2>
                          <p>{base.description}</p>
                          <p>{base.titulo}</p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="udemy-learning">
        <div className="titulo-learning">
          <h2>Udemy - Learning</h2>
          <a className="titulo-tutor" href="https://twitter.com/JuanDevWP" rel="noopener noreferrer">
            React- Juan de la Torre
          </a>
        </div>
        <div className="contenedor-learning">
          <CardGroup className="titulo-tutor">
            {learning.map((learning, i) => {
              return (
                <Card key={i}>
                  <a href={learning.url} className="img__wrap" target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={learning.img} className="toto" />
                    <Card.Body className="img__description_layer">
                      <Card.Title>{learning.titulo}</Card.Title>
                      <Card.Text>{learning.description}</Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              );
            })}
          </CardGroup>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
