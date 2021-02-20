import React, { useRef } from 'react';
import { useScroll, scrollHandler } from '../../hooks/use-scroll';

type TParallax = {
  offset?: number;
};

const setTranslateY = (elem: HTMLElement, value: number): void => {
  // eslint-disable-next-line no-param-reassign
  elem.style.transform = `translateY(${0 + value}px)`;
};

export const Parallax: React.FC<SpreadingProps<HTMLDivElement> & TParallax> = ({
  children,
  offset = 0,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = scrollHandler(ref, (scrollRate, elem) => {
    const translateY = scrollRate <= 0 ? scrollRate * offset : 0;
    setTranslateY(elem, translateY);
  });

  useScroll(handleScroll);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};
