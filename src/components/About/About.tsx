import React, { useRef, useState } from 'react';
import stringHash from 'string-hash';
import { useScroll, scrollHandler } from '../../hooks/use-scroll';
import s from './About.module.css';

type Props<E> = {
  viewport: E;
  content: {
    text: Array<string>;
  };
};

export const About = <E extends HTMLElement>({ viewport, content }: Props<E>) => {
  const [isShow, setShowState] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const handleScroll = scrollHandler(
    descriptionRef,
    (scrollRate) => scrollRate < 0.6 && setShowState(true),
  );
  const { text } = content;

  useScroll(handleScroll, viewport);

  return (
    <div className={s.description} ref={descriptionRef}>
      {isShow &&
        text.map((paragraph) => (
          <p key={stringHash(paragraph)} className={s.details}>
            {paragraph}
          </p>
        ))}
    </div>
  );
};
