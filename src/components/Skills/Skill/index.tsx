import React from 'react';
import s from './Skill.module.css';

type TChart = {
  rate: number;
};

const Chart: React.FC<TChart> = ({ rate }) => (
  <div className={s.chart}>
    <svg viewBox="0 0 36 36" width="100%" height="100%">
      <path
        className={s.circleBg}
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={s.circle}
        strokeDasharray={`${rate}, 100`}
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={s.percentage}>
        {rate}%
      </text>
    </svg>
  </div>
);

export type TSkill = TChart & {
  name: string;
  link?: string;
};

const Skill: React.FC<TSkill> = ({ name, rate, link }) => {
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

export default Skill;
