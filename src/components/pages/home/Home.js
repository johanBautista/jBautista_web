import React from 'react';
import { Button, Form } from 'react-bootstrap';
import imgHome from '../../img/home.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="img-home">
        <div className="text-center container">
          <h1 className="title-home">Frontend Developer</h1>

          <div className="line-style"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            quia, cupiditate ullam asperiores officia
          </p>
          <Button variant="dark">My Experience</Button>
        </div>
      </div>
      <div className="footer-img">
        <p>foto de unsplash</p>
      </div>
      {/* /////////////// */}
      <div className="container about-section">
        <div className="display-home">
          <div className="">
            <h2 className="">About me</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quia, cupiditate ullam asperiores officia, Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nesciunt quia, cupiditate ullam
              asperiores officia.abs
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quia, cupiditate ullam asperiores officia
            </p>
          </div>
          <div className="foto">
            <img src={imgHome} alt="cambio" className="foto-cambio" />
          </div>
        </div>
      </div>

      <div className="container stack-section">
        <div className="">
          <div className="foto">
            <img src={imgHome} alt="cambio" className="foto-block" />
          </div>
          <div className="section-content">
            <h2 className="">Technologies</h2>
            <div className="display-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt quia, cupiditate ullam asperiores officia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container why-section">
        <div className="display-home">
          <div className="foto">
            <img src={imgHome} alt="cambio" className="foto-cambio" />
          </div>

          <div className="">
            <h2 className="">Why me?</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quia, cupiditate ullam asperiores officia, Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Nesciunt quia, cupiditate ullam
              asperiores officia.abs
            </p>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quia, cupiditate ullam asperiores officia
            </p>
          </div>
        </div>
      </div>

      <div className="container project-section">
        <div className="">
          <div className="section-content">
            <h2 className="">Projects</h2>
          </div>
          <div className="foto">
            <img src={imgHome} alt="cambio" className="foto-block" />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="">Why me?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          quia, cupiditate ullam asperiores officia, Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nesciunt quia, cupiditate ullam
          asperiores officia.abs
        </p>
      </div>

      <div className="form img-contact">
        <div className="formo">
          <Form className="contact-form card">
            <Form.Group>
              <Form.Control
                type="name"
                placeholder="Your name"
                // style={{ borderBottom: '1px solid #2966a3' }}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Your email" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Your text here"
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
