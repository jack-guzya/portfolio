import React from 'react';
import classnames from 'classnames';
import useMountingTrigger from '../../common/hooks/use-mounting-trigger';
import s from './Nav.module.css';

type TProps = {
  list: Array<string>;
};

const Nav: React.FC<TProps> = ({ list }) => {
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
            {list.map((item) => (
              <li key={item} className={s.item}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Nav;
