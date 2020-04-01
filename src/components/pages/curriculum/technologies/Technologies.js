import React from 'react';
import './Technologies.css';
import html from '../../../img/html.png';
import css from '../../../img/css.png';
import bbdd from '../../../img/bbdd.png';
import git from '../../../img/git.png';
import react from '../../../img/react.png';

const Technologies = () => {
  return (
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
  );
};

export default Technologies;
