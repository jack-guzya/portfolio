import React, { useRef, useState } from 'react';
import stringHash from 'string-hash';
import Title from '../../common/Title';
import Section from '../../common/Section';
import { useScroll, scrollHandler } from '../../common/hooks/use-scroll';
import s from './About.module.css';

type Props<E> = {
  viewport: E;
  content: {
    text: Array<string>;
  };
};

const About = <E extends HTMLElement>({ viewport, content }: Props<E>) => {
  const [isShow, setShowState] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const handleScroll = scrollHandler(
    descriptionRef,
    (scrollRate) => scrollRate < 0.6 && setShowState(true),
  );
  const { text } = content;

  useScroll(handleScroll, viewport);

  return (
    <Section className={s.wrapper} id="about">
      <Title className={s.title}>About</Title>
      <div className={s.description} ref={descriptionRef}>
        {isShow &&
          text.map((paragraph) => (
            <p key={stringHash(paragraph)} className={s.details}>
              {paragraph}
            </p>
          ))}
      </div>
    </Section>
  );
};

export default About;
