/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './Project.css';
import base from '../../../services/projectos';

// const API = 'https://webjohan-59a0f.firebaseio.com/.json';

console.log('info-json:', base);

class Projects extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     projects: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  render() {
    // const { data } = this.props;
    // console.log(data);

    return (
      <div className="container projects">
        <h3>Projects start</h3>
        <div className="grid-container">
          {base.map((base, i) => {
            return (
              <div key={i}>
                <div className="grid-item">
                  <a href={base.url} className="img__wrap" target="_blank">
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
    );
  }
}

export default Projects;
