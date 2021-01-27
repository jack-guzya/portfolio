import React from 'react';
import classnames from 'classnames';
import useMountingTrigger from '../../../common/hooks/use-mounting-trigger';
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
  description?: string;
  active?: boolean;
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

const Workplace: React.FC<TProps> = ({ name, main, description, active }) => {
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

        {description && <p className={s.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Workplace;
