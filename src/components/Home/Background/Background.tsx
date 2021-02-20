import React from 'react';
import { Parallax } from '../../../common/Parallax';
import s from './Background.module.css';

export const Background: React.FC = () => {
  return (
    <>
      <Parallax className={`${s.bg} ${s.forest}`} offset={-600} />
      <Parallax className={`${s.bg} ${s.clouds}`} offset={-1200} />
      <div className={`${s.bg} ${s.sky}`} />
    </>
  );
};
