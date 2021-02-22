import React, { useState } from 'react';
import classnames from 'classnames';
import useMountingTrigger from '../../hooks/use-mounting-trigger';
import { useSectionEvent } from './Nav.helpers';
import s from './Nav.module.css';

type TProps = {
  linkList: Array<{
    id: string;
    name: string;
  }>;
};

const createLinkCssClass = (linkId: string, activeLink?: string) =>
  classnames(s.link, { [s.active]: activeLink === linkId });

const FIRST_CHAR = 0;

export const Nav: React.FC<TProps> = ({ linkList }) => {
  const [activeLink, setActiveLink] = useState<string | undefined>();
  const { isMount, isActive, handleTrigger, setMountState } = useMountingTrigger({
    autoUnmount: false,
  });

  useSectionEvent((e) => {
    const sectionId = (e.target as HTMLDivElement).id;
    setActiveLink(sectionId);
  });

  const classes = {
    navigation: classnames(s.navigation, { [s.show]: isActive }),
    trigger: classnames(s.trigger, { [s.active]: isActive }),
  };

  return (
    <div className={s.container}>
      <button className={classes.trigger} type="button" onClick={handleTrigger}>
        {activeLink && activeLink[FIRST_CHAR].toUpperCase()}
      </button>
      {isMount && (
        <nav
          className={classes.navigation}
          onAnimationEnd={() => !isActive && setMountState(false)}
        >
          <ul className={s.list}>
            {linkList.map(({ id, name }) => (
              <li key={name} className={createLinkCssClass(id, activeLink)}>
                <a href={`#${id}`}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
