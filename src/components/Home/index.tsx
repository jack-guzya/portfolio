import React from 'react';
import stringHash from 'string-hash';
import cursorParallax from '../../common/cursor-parallax';
import Background from './Home.background';
import s from './Home.module.css';

type Props = {
  content: {
    name: string;
    text?: Array<string>;
  };
};

const Home: React.FC<SpreadingProps<HTMLDivElement> & Props> = ({ content, ...props }) => {
  const { text, name } = content;

  return (
    <section
      className={s.container}
      onMouseMove={cursorParallax({ coefficient: 0.01 }, { coefficient: 0.01 })}
      id="home"
      {...props}
    >
      <h2 className={s.title}>
        Hi, I'm <span className={s.name}>{name}</span>
      </h2>
      {text && text.map((paragraph) => <p key={stringHash(paragraph)}>{paragraph}</p>)}
    </section>
  );
};

export default Home;
export { Home as Container, Background };
