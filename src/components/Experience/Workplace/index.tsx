import React from 'react';
import s from './Workplace.module.css';

type TProps = {
  name: string;
  date: string;
  role: string;
  link?: string;
};

const Workplace: React.FC<TProps> = ({ name, link, date, role }) => {
  return (
    <div>
      <h3>
        <a href={link || '#'} target={link ? '_blank' : '_self'} rel="noreferrer">
          {name}
        </a>
      </h3>
      <p>{date}</p>
      <p>{role}</p>
    </div>
  );
};

export default Workplace;
