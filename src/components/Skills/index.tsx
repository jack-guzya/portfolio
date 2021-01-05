import React from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import s from './Skills.module.css';

const Skills = () => {
  return (
    <Section className={s.wrapper}>
      <Title className={s.title}>Skills</Title>
    </Section>
  );
};

export default Skills;