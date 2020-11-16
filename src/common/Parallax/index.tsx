import React from 'react';
import classnames from 'classnames';
import s from './Parallax.module.css';

type TProps = {
  back: () => React.ReactNode;
  base: () => React.ReactNode;
};

const Parallax: React.FC<TProps> = ({ back, base }) => (
  <div className={s.container}>
    <div className={classnames(s.layer, s['layer--back'])}>{back()}</div>
    <div className={classnames(s.layer, s['layer--base'])}>{base()}</div>
  </div>
);

export default Parallax;
