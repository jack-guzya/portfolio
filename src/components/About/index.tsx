import React from 'react';
import Title from '../../common/Title'; 
import s from './About.module.css';

const About = () => {
  return (
    <section className={s.container}>
      <Title>About</Title>
      <p className={s.details}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed dolores
        distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem repellendus
        dolore tempore, quasi nesciunt, ullam accusantium.
      </p>
      <p className={s.details}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed dolores
        distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem repellendus
        dolore tempore, quasi nesciunt, ullam accusantium.
      </p>
    </section>
  );
};

export default About;
