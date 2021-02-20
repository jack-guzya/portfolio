import React from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import Skill, { TSkill } from './Skill';
import SecondarySkills from './Secondary';
// import mainList, { secondarySkills } from './Skills.list';
import s from './Skills.module.css';

type Props = {
  content: {
    main: Array<TSkill>;
    secondary: Array<{ title: string; list: Array<string> }>;
  };
};

const Skills: React.FC<Props> = ({ content }) => {
  const { main, secondary } = content;

  return (
    <Section className={s.wrapper} id="skills">
      <Title className={s.title}>Skills</Title>
      <div className={s.main}>
        {main.map(({ name, rate }) => (
          <Skill key={name} name={name} rate={rate} />
        ))}
      </div>
      <SecondarySkills data={secondary} />
    </Section>
  );
};

export default Skills;
