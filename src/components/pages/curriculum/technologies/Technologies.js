import React, { Fragment } from 'react';
import './Technologies.css';
import css from '../../../img/1css.png';
import html from '../../../img/2html.png';
import bbdd from '../../../img/3bbdd.png';
import git from '../../../img/4git.png';
import react from '../../../img/5react.png';
// import Modal from './Modal';

const Technologies = () => {
  return (
    <Fragment>
      <div className="technologies-icon">
        <article>
          <img src={css} alt="html" />
          <p className="title-tech">CSS & HTML</p>
        </article>
        <article>
          <img src={html} alt="javascript" />
          <p className="title-tech">Javascript</p>
        </article>
        <article>
          <img src={bbdd} alt="bbdd" />
          <p className="title-tech">mongodb & Nodejs</p>
        </article>
        <article>
          <img src={git} alt="git" />
          <p className="title-tech">git & github</p>
        </article>
        <article>
          <img src={react} alt="react" />
          <p className="title-tech">react & angular</p>
        </article>
      </div>
      {/* <Modal /> */}
      {/* <div>
        <h4 className="hover-underline-animation  show">HTML - CSS</h4>
        <ul id="cont">
          <li>Flexbox</li>
          <li>paso1</li>
          <li>paso1</li>
          <li>paso1</li>
          <li>paso1</li>
          <li>paso1</li>
        </ul>
      </div> */}
    </Fragment>
  );
};

export default Technologies;
