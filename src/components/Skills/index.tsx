import React from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import Skill from './Skill';
import list from './Skills.list';
import s from './Skills.module.css';

const Skills = () => {
  return (
    <Section className={s.wrapper}>
      <Title className={s.title}>Skills</Title>
      {list.map(({ name, rate }) => (
        <Skill key={name} name={name} rate={rate} />
      ))}
    </Section>
  );
};

export default Skills;
