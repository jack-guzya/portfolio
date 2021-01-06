import React, { useState } from 'react';
import classnames from 'classnames';
import { DEFAULT_PERSPECTIVE } from './Parallax.constants';

import s from './Parallax.module.css';

interface IContainerProps<P> extends SpreadingProps<P> {
  children: <E extends HTMLElement>(parent: E, perspective?: number) => React.ReactNode;
  perspective?: number;
}

const useCallbackRef = <T extends unknown>(): [T | null, (node: T | null) => void] => {
  const [elem, setElem] = useState<T | null>(null);

  return [
    elem,
    (node) => {
      if (elem !== node) {
        setElem(node);
      }
    },
  ];
};

const Container: React.FC<IContainerProps<HTMLDivElement>> = ({
  children,
  className = '',
  perspective = DEFAULT_PERSPECTIVE,
  ...props
}) => {
  const [parent, callbackRef] = useCallbackRef<HTMLDivElement>();
  const CSSClass = classnames(s.container, { [className]: !!className });

  return (
    <div
      className={CSSClass}
      ref={callbackRef}
      style={{ perspective: `${perspective}px`, ...props.style }}
      {...props}
    >
      {parent && children(parent, perspective)}
    </div>
  );
};

export default Container;
