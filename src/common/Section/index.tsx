import React from 'react';
import classnames from 'classnames';
import s from './Section.module.css';

const Section: React.FC<SpreadingProps<HTMLDivElement>> = ({ children, className, ...props }) => {
  const cssClass = classnames(s.wrapper, { [className as string]: !!className });

  return (
    <section className={cssClass} {...props}>
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default Section;
