import React from 'react';
// Components
import Title from '../../common/Title';
// Style
import s from './Experience.module.css';

const Experience = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <Title className={s.title}>Experience</Title>
      </div>
    </section>
  );
};

export default Experience;
