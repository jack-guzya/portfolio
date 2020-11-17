import React from 'react';
import cursorParallax from '../../common/cursor-parallax';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <section
      className={s.container}
      onMouseMove={cursorParallax({ translateY: -50, translateX: -50, coefficient: 0.1 })}
    >
      <h2 className={s.title}>Hi, my Friend!</h2>
    </section>
  );
};

export default Home;
