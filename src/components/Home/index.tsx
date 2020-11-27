import React from 'react';
import cursorParallax from '../../common/cursor-parallax';
import Background from './Home.background';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <section
      className={s.container}
      onMouseMove={cursorParallax({ coefficient: 0.01 }, { coefficient: 0.01 })}
    >
      <h2 className={s.title}>
        Hi, I'm <span className={s.name}>Evgeniy Guzenkov</span>
      </h2>
      <p>Front-end Developer</p>
    </section>
  );
};

export default Home;
export { Home as Container, Background };
