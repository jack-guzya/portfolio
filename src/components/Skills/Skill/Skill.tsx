import React from 'react';
import { Chart, TChart } from './Skill.chart';
import s from './Skill.module.css';

export type TSkill = TChart & {
  name: string;
  link?: string;
};

export const Skill: React.FC<TSkill> = ({ name, rate, link }) => {
  return (
    <a
      className={`button button_border ${s.container}`}
      href={link || '#'}
      target={link ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <Chart rate={rate} />
      <p className={s.name}>{name}</p>
    </a>
  );
};
