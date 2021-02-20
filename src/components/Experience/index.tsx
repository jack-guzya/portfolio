import React from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import Workplace, { TWorkplace } from './Workplace';
import s from './Experience.module.css';

export type TExperience = {
  content: {
    list: Array<TWorkplace>;
  };
};

const Experience: React.FC<TExperience> = ({ content }) => {
  const { list } = content;

  return (
    <Section className={s.wrapper} id="experience">
      <Title className={s.title}>Experience</Title>
      <div className={s.list}>
        {list.map(({ name, main, description, active }) => (
          <Workplace key={name} name={name} main={main} description={description} active={active} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
