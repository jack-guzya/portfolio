import React from 'react';
import classnames from 'classnames';
import { useMountingTrigger } from '../../../hooks/use-mounting-trigger';
import s from './Secondary.module.css';

type TSecondarySkills = {
  data: Array<{
    title: string;
    list: Array<string>;
  }>;
};

export const SecondarySkills: React.FC<TSecondarySkills> = ({ data }) => {
  const { isMount, isActive, handleTrigger, unmount } = useMountingTrigger({
    autoUnmount: false,
  });

  const classes = {
    container: classnames(s.container, { [s.show]: isActive }),
    trigger: classnames('button button_border-bottom', s.trigger, { [s.active]: isActive }),
  };

  return (
    <>
      <button className={classes.trigger} type="button" onClick={handleTrigger}>
        See more
      </button>
      <div className={classes.container} onAnimationEnd={unmount}>
        {isMount && (
          <table className={s.table}>
            <tbody>
              {data.map(({ title, list }) => (
                <tr key={title}>
                  <td className={s.title}>{title}</td>
                  <td>
                    <ul>
                      {list.map((skillName) => (
                        <li key={skillName} className={s.skill}>
                          {skillName}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default SecondarySkills;
