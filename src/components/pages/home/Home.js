import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="img-home">
      <div className="text-center container">
        <h1 className="title-home">Full Stack Developer</h1>

        <div className="line-style"></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          quia, cupiditate ullam asperiores officia
        </p>
        <Button variant="dark">Wellcome</Button>
      </div>
    </div>
  );
};

export default Home;
