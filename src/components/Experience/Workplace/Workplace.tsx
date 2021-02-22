import React from 'react';
import stringHash from 'string-hash';
import classnames from 'classnames';
import { useMountingTrigger } from '../../../hooks/use-mounting-trigger';
import s from './Workplace.module.css';

type ItemOfMain =
  | string
  | {
      link: string;
      text?: string;
    };

export type TWorkplace = {
  name: string;
  main: Array<ItemOfMain>;
  description?: Array<string>;
  active?: boolean;
};

export const renderListItem = (data: ItemOfMain) => {
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

export const Workplace: React.FC<TWorkplace> = ({ name, main, description, active }) => {
  const { isActive, handleTrigger } = useMountingTrigger({
    autoUnmount: false,
    isActive: active,
  });

  const classes = {
    container: classnames(s.container, { [s.active]: isActive }),
    details: classnames(s.details, { [s.show]: isActive }),
    trigger: classnames('button', s.title, { [s.active]: isActive }),
  };

  return (
    <div className={classes.container}>
      <button className={classes.trigger} type="button" onClick={handleTrigger}>
        {name}
      </button>
      <div className={classes.details}>
        <ul className={s['main-info']}>{main.map(renderListItem)}</ul>

        {description &&
          description.map((paragraph) => (
            <p key={stringHash(paragraph)} className={s.description}>
              {paragraph}
            </p>
          ))}
      </div>
    </div>
  );
};
