import React from 'react';
import classnames from 'classnames';
import useMountingTrigger from '../../hooks/use-mounting-trigger';
import s from './Nav.module.css';

type TProps = {
  list: Array<{
    id: string;
    name: string;
  }>;
};

export const Nav: React.FC<TProps> = ({ list }) => {
  const { isMount, isActive, handleTrigger, setMountState } = useMountingTrigger({
    autoUnmount: false,
  });

  const classes = {
    navigation: classnames(s.navigation, { [s.show]: isActive }),
    trigger: classnames(s.trigger, { [s.active]: isActive }),
  };

  return (
    <div className={s.container}>
      <button className={classes.trigger} type="button" onClick={handleTrigger} />
      {isMount && (
        <nav
          className={classes.navigation}
          onAnimationEnd={() => !isActive && setMountState(false)}
        >
          <ul className={s.list}>
            {list.map(({ id, name }) => (
              <li key={name} className={s.item}>
                <a href={`#${id}`}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
