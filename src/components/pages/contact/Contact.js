import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div className="img-formi">
      <div className="container container-contact img-formi">
        <div className="contact-info">
          <h2 className="info-title img-form"></h2>
          <hr/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloremque voluptas dignissimos maxime suscipit, possimus eum
            excepturi odio quod, ipsa alias ratione nam perspiciatis adipisci
            omnis laudantium porro dolorem? Consequuntur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            doloremque voluptas dignissimos maxime suscipit, possimus eum
            excepturi odio quod, ipsa alias ratione nam perspiciatis adipisci
            omnis laudantium porro dolorem? Consequuntur!
          </p>
        </div>
        <div className="contact-form card img-forme">
          <h2 className="contact-title">Contact me</h2>
          <Form>
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

export default Contact;
