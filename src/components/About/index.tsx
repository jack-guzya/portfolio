import React, { useRef, useState } from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import { useScroll, getEndpointHandler } from '../../common/hooks/use-scroll';
import s from './About.module.css';

const About = <E extends HTMLElement>({ viewport }: { viewport: E }) => {
  const [isShow, setShowState] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useScroll(
    viewport,
    getEndpointHandler(descriptionRef, {
      endPoint: 0.6,
      cb: () => setShowState(true),
    }),
  );

  return (
    <Section className={s.wrapper}>
      <Title className={s.title}>About</Title>
      <div className={s.description} ref={descriptionRef}>
        {isShow && (
          <>
            <p className={s.details}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
              dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro
              voluptatem repellendus dolore tempore, quasi nesciunt, ullam accusantium.
            </p>
            <p className={s.details}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laudantium quaerat sed
              dolores distinctio ducimus molestias quidem totam, vitae corrupti fugit porro
              voluptatem repellendus dolore tempore, quasi nesciunt, ullam accusantium.
            </p>
          </>
        )}
      </div>
    </Section>
  );
};

export default About;
