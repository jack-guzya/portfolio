import React, { useState } from 'react';
import classnames from 'classnames';
import s from './Nav.module.css';

const Nav: React.FC = () => {
  const [isShow, changeDisplay] = useState<boolean>(false);

  const handleTrigger = () => {
    changeDisplay(!isShow);
  };

  const list = [
    'Home',
    'About',
    'Skills',
    'Works',
    'Contacts',
  ];

  const classes = {
    container: classnames(
      s.container,
      { [s.show]: isShow },
    ),
    trigger: classnames(
      s.trigger,
      { [s.show]: isShow },
    ),
  };

  return (
    <>
      <button className={classes.trigger} type="button" onClick={handleTrigger} />
      <nav className={classes.container}>
        <ul className={s.list}>
          {list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </nav>
    </>
  );
};

export default Nav;