import React from 'react';
import s from './Title.module.css';

const Title: React.FC<SpreadingProps<HTMLHeadingElement>> = ({ children, className }) => (
  <h2 className={`${s.title} ${className}`}>{children}</h2>
);

export default Title;
