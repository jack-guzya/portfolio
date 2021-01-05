import React from 'react';
import defaultLogo from '../assets/default-logo.svg';
import s from './Workplace.module.css';

type TProps = {
  name: string;
  date: string;
  role: string;
  link?: string;
  logo?: string;
};

const Workplace: React.FC<TProps> = ({ name, date, role, link, logo }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.details}>
        <div className={s.logo}>
          <a href={link || '#'} target={link ? '_blank' : '_self'} rel="noreferrer">
            <img src={logo || defaultLogo} alt={name} />
          </a>
        </div>
        <div className={s.description}>
          <p>{date}</p>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Workplace;
