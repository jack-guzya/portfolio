import React from 'react';
import Title from '../../common/Title';
import s from './About.module.css';
import { useScrollEndpoint } from '../../common/hooks/use-scroll';

const About = <E extends HTMLElement>({ viewport }: { viewport: E }) => {
  const ref = useScrollEndpoint(viewport, {
    endPoint: 1,
    cb: () => console.log('CALLBACK LOWER'),
    upperCb: () => console.log('Callback upper'),
  });

  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <Title>About</Title>
        <p className={s.details}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
          dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem
          repellendus dolore tempore, quasi nesciunt, ullam accusantium.
        </p>
        <p className={s.details} ref={ref}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
          dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem
          repellendus dolore tempore, quasi nesciunt, ullam accusantium.
        </p>
      </div>
    </section>
  );
};

export default About;
