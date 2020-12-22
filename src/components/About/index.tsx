import React, { useRef, useState } from 'react';
import Title from '../../common/Title';
import s from './About.module.css';
import { useScroll, getEndpointHandler } from '../../common/hooks/use-scroll';

const About = <E extends HTMLElement>({ viewport }: { viewport: E }) => {
  const [isShow, setShowState] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useScroll(
    viewport,
    getEndpointHandler(descriptionRef, {
      endPoint: 0.3,
      cb: () => setShowState(true),
    }),
  );

  return (
    <section className={s.wrapper}>
      <div className={s.container} ref={descriptionRef}>
        <Title>About</Title>
        {isShow && (
          <div className={s.description}>
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
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
