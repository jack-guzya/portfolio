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
      <div className={s.list}>
        {list.map(({ name, date, role, link, description }) => (
          <Workplace
            key={name}
            name={name}
            date={date}
            role={role}
            link={link}
            description={description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
