import React from 'react';
import stringHash from 'string-hash';
import { Background } from './Background';
import s from './Home.module.css';

type Props = {
  content: {
    name: string;
    text?: Array<string>;
  };
};

export const Home: React.FC<SpreadingProps<HTMLDivElement> & Props> = ({ content, ...props }) => {
  const { text, name } = content;

  return (
    <>
      <section className={s.container} {...props}>
        <h2 className={s.title}>
          Hi, I'm <span className={s.name}>{name}</span>
        </h2>

        {text &&
          text.map((paragraph) => (
            <p className={s.text} key={stringHash(paragraph)}>
              {paragraph}
            </p>
          ))}

        <Background />
      </section>
    </>
  );
};
