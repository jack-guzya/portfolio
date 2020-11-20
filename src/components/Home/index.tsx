import React from 'react';
import cursorParallax from '../../common/cursor-parallax';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <section
      className={s.container}
      onMouseMove={cursorParallax({ coefficient: 0.2 }, { coefficient: 0.1 })}
    >
      <h2 className={s.title}>Hi, my Friend!</h2>
      <h2>I am Evgeniy!</h2>
    </section>
  );
};

export default Home;
