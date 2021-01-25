import React from 'react';
import s from './Workplace.module.css';

type TItemOfMain =
  | string
  | {
      link: string;
      text?: string;
    };

type TProps = {
  name: string;
  main: Array<TItemOfMain>;
  link?: string;
  description?: string;
};

export const renderListItem = (data: TItemOfMain) => {
  if (typeof data === 'object') {
    return (
      <li key={data.link}>
        <a href={data.link} target="_blank" rel="noreferrer">
          {data.text || data.link}
        </a>
      </li>
    );
  }

  return <li key={data}>{data}</li>;
};

const Workplace: React.FC<TProps> = ({ name, main, description }) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{name}</h3>
      <div className={s.details}>
        <ul className={s['main-info']}>
          {main.map(renderListItem)}
        </ul>

        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Workplace;
