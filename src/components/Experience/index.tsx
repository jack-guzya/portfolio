import React from 'react';
import Title from '../../common/Title';
import Section from '../../common/Section';
import Workplace from './Workplace';
import list from './Experience.list';
import s from './Experience.module.css';

const Experience = () => {
  return (
    <Section className={s.wrapper}>
      <Title className={s.title}>Experience</Title>
      {list.map(({ name, date, role, link }) => (
        <Workplace key={name} name={name} date={date} role={role} link={link} />
      ))}
    </Section>
  );
};

export default Experience;
