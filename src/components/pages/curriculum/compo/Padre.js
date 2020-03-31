import React from 'react';
import Progress from './Hijo.js'
import './Hijo.css'

const App = (done) => {
  return (
    <>
      <h2>React Progress Bar</h2>
      <Progress done="70" />
      <h2>css Progress Bar</h2>
      <Progress done="30" />
      <h2>ingles Progress r</h2>
      <Progress done="90" />
      <h2>java Progress Bar</h2>
      <Progress done="20" />
      <h2>css Progress Bar</h2>
      <Progress done="30" />
      <h2>ingles Progress Bar</h2>
      <Progress done="90" />
      <h2>java Progress Bar</h2>
      <Progress done="20" />
    </>
  );
};

const Padre = () => {
  return (
    <div>
      <>
        <h2>Lista desde HardSkills</h2>
        <App />
      </>
    </div>
  );
};

export default Padre;
