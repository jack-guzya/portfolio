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
        {list.map(({ name, main, description }, index) => (
          <Workplace
            key={name}
            name={name}
            main={main}
            description={description}
            active={!index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
