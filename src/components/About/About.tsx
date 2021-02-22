import React, { useRef, useState } from 'react';
import stringHash from 'string-hash';
import { useScroll, addScrollHandlers } from '../../hooks/use-scroll';
import s from './About.module.css';

type Props = {
  content: {
    text: Array<string>;
  };
};

export const About: React.FC<Props> = ({ content }) => {
  const [isShow, setShowState] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const handleScroll = addScrollHandlers(
    descriptionRef,
    (scrollRate) => scrollRate < 0.6 && setShowState(true),
  );
  const { text } = content;

  useScroll(handleScroll);

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
