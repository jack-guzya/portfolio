import React from 'react';
import classnames from 'classnames';
import s from './Title.module.css';

const Title: React.FC<SpreadingProps<HTMLHeadingElement>> = ({ children, className }) => {
  const titleCssClass = classnames(s.title, { [className as string]: !!className });

  return <h2 className={titleCssClass}>{children}</h2>;
};

export default Title;
