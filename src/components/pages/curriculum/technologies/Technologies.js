import React from 'react';
import './Technologies.css';
import css from '../../../img/1css.png';
import html from '../../../img/2html.png';
import bbdd from '../../../img/3bbdd.png';
import git from '../../../img/4git.png';
import react from '../../../img/5react.png';

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
