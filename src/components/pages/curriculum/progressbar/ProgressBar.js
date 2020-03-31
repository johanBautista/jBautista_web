import React from 'react';
import './ProgressBar.css'

const ProgressBar = ({ porcent }) => {
  const [style, setStyle] = React.useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${porcent}`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {porcent}%
      </div>
      
    </div>
  );
};

export default ProgressBar;

// const Progress = ({ done }) => {
//   const [style, setStyle] = React.useState({});

//   setTimeout(() => {
//     const newStyle = {
//       opacity: 1,
//       width: `${done}%`,
//     };

//     setStyle(newStyle);
//   }, 200);

//   return (
//     <div className="progress">
//       <div className="progress-done" style={style}>
//         {done}%
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <>
//     <h1>React Progress Bar</h1>
//     <Progress done="70" />
//     <h2>css Progress Bar</h2>
//     <Progress done="30" />
//     <h2>ingles Progress Bar</h2>
//     <Progress done="90" />
//     <h2>java Progress Bar</h2>
//     <Progress done="20" />
//     <h2>css Progress Bar</h2>
//     <Progress done="30" />
//     <h2>ingles Progress Bar</h2>
//     <Progress done="90" />
//     <h2>java Progress Bar</h2>
//     <Progress done="20" />
//   </>
// );

// ReactDOM.render(<App />, document.getElementById('app'));
