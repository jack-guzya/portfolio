import React from 'react';
import { Workplace, TWorkplace } from './Workplace';
import s from './Experience.module.css';

export type TExperience = {
  content: {
    list: Array<TWorkplace>;
  };
};

export const Experience: React.FC<TExperience> = ({ content }) => {
  const { list } = content;

  return (
    <div className={s.list}>
      {list.map(({ name, main, description, active }) => (
        <Workplace key={name} name={name} main={main} description={description} active={active} />
      ))}
    </div>
  );
};
