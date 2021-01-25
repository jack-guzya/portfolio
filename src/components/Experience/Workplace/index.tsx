import React from 'react';
import s from './Workplace.module.css';

type TProps = {
  name: string;
  date: string;
  role: string;
  link?: string;
  description?: string;
};

const Workplace: React.FC<TProps> = ({ name, date, role, link, description }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.details}>
        <ul className={s['main-info']}>
          <li>{date}</li>
          <li>{role}</li>
          {link && <li><a href={link} target='_blank' rel="noreferrer">{link}</a></li>}
        </ul>

        {description && <p className={s.description}>{description}</p>} 
      </div>
    </div>
  );
};

export default Workplace;
