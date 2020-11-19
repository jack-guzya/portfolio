import React, { useRef } from 'react';
import Title from '../../common/Title';
import s from './About.module.css';
import useScroll from '../../common/hooks/use-scroll';

interface IAboutProps {
  viewport?: HTMLDivElement | null;
}

const About: React.FC<IAboutProps> = ({ viewport }) => {
  const detailsRef = useRef<HTMLParagraphElement | null>(null);

  const handleScroll = (e: Event) => {
    const view = e.currentTarget as typeof viewport;
    console.log(view?.clientHeight);
    console.log(detailsRef.current?.getBoundingClientRect().y);
  };
  useScroll(viewport, handleScroll);

  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <Title>About</Title>
        <p className={s.details}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
          dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem
          repellendus dolore tempore, quasi nesciunt, ullam accusantium.
        </p>
        <p className={s.details} ref={detailsRef}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
          dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro voluptatem
          repellendus dolore tempore, quasi nesciunt, ullam accusantium.
        </p>
      </div>
    </section>
  );
};

export default About;
