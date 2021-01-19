import React from 'react';
import classnames from 'classnames';
import useMountingTrigger from '../../../common/hooks/use-mounting-trigger';
import s from './Secondary.module.css';

type TProps = {
  data: Array<{
    title: string;
    list: Array<string>;
  }>;
};

const SecondarySkills: React.FC<TProps> = ({ data }) => {
  const { isMount, isActive, handleTrigger, setMountState } = useMountingTrigger({
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
      <div className={classes.container} onAnimationEnd={() => !isActive && setMountState(false)}>
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
