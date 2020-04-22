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
    <div className="languages-set">
      <div className="progress">
        <div className="progress-porcent" style={style}>
          {porcent}%
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h5>Spanish</h5>
      <Progress porcent="100" />
      <h5>Catalán </h5>
      <Progress porcent="60" />
      <h5>French </h5>
      <Progress porcent="40" />
      <h5>English </h5>
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
