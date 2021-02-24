import React from 'react';
import { Skill, TSkill } from './Skill';
import { SecondarySkills } from './Secondary';
import s from './Skills.module.css';

type Props = {
  content: {
    main: Array<TSkill>;
    secondary: Array<{ title: string; list: Array<string> }>;
  };
};

export const Skills: React.FC<Props> = ({ content }) => {
  const { main, secondary } = content;

  return (
    <>
      <div className={s.main}>
        {main.map(({ name, rate, link }) => (
          <Skill key={name} name={name} rate={rate} link={link} />
        ))}
      </div>
      <SecondarySkills data={secondary} />
    </>
  );
};

export default Skills;
