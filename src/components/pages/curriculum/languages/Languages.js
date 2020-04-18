import React from 'react';
import './Languages.css';

const Progress = ({ porcent }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${porcent}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-porcent" style={style}>
        {porcent}%
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h4>Spanish</h4>
      <Progress porcent="100" />
      <h4>Catalán </h4>
      <Progress porcent="60" />
      <h4>French </h4>
      <Progress porcent="40" />
      <h4>English </h4>
      <Progress porcent="30" />
    </>
  );
};

const Languages = () => {
  return (
    <div>
      <App />
    </div>
  );
};

export default Languages;
