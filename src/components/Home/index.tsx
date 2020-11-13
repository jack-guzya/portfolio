import React from 'react';
import s from './Home.module.css';

const Home: React.FC = () => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Hi, my Friend!</h2>
    </section>
  );
};

export default Home; 