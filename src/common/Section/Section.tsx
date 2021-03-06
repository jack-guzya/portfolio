import React, { useRef } from 'react';
import classnames from 'classnames';
import { useScroll, addScrollHandlers, addRateTransitionHandlers } from '../../hooks/use-scroll';
import s from './Section.module.css';

const dispatchSectionEvent = (elem: HTMLElement) =>
  elem.dispatchEvent(new Event('sectiontop', { bubbles: true }));

export const Container: React.FC<SpreadingProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const cssClass = classnames(s.container, { [className as string]: !!className });

  return (
    <div className={cssClass} {...props}>
      {children}
    </div>
  );
};

export const Section: React.FC<SpreadingProps<HTMLDivElement>> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = addScrollHandlers(ref, addRateTransitionHandlers(dispatchSectionEvent));

  useScroll(handleScroll);

  return (
    <section ref={ref} {...props}>
      {children}
    </section>
  );
};
