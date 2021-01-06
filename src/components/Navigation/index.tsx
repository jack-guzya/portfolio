import React, { useState } from 'react';
import classnames from 'classnames';
import s from './Nav.module.css';

type TProps = {
  list: Array<string>;
};

const Nav: React.FC<TProps> = ({ list }) => {
  const [isActive, setTriggerState] = useState<boolean>(false);
  const [isMount, setMountState] = useState<boolean>(false);

  const handleTrigger = () => {
    setTriggerState(!isActive);
    !isActive && setMountState(true);
  };

  const classes = {
    container: classnames(s.container, { [s.show]: isActive }),
    trigger: classnames(s.trigger, { [s.active]: isActive }),
  };

  return (
    <div className={s.navigation}>
      <button className={classes.trigger} type="button" onClick={handleTrigger} />
      {isMount && (
        <nav className={classes.container} onAnimationEnd={() => !isActive && setMountState(false)}>
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