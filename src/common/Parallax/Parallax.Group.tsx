import React from 'react';
import classnames from 'classnames';

import s from './Parallax.module.css';

const Group: React.FC<SpreadingProps<HTMLDivElement>> = ({ children, className = '', ...props }) => {
  const CSSClass = classnames(s.group, { [className]: !!className });

  return (
    <div className={CSSClass} {...props}>
      {children}
    </div>
  );
};

export default Group;