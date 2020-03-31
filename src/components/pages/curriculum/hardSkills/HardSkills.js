import React from 'react';
import './HardSkills.css'

const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

const App = () => {
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

const HardSkills = () => {
  return (
    <div>
      <>
        <h2>Lista desde HardSkills</h2>
        <App />
      </>
    </div>
  );
};

export default HardSkills;
