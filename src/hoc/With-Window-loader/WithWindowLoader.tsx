/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Loader } from '../../common/Loader';
import { useWindowEvent } from '../../hooks/use-window-event';
import s from './WithWindowLoader.module.css';

type Props<E> = SpreadingProps<E & { children?: React.ReactNode }>;

export const WithWindowLoader = <E extends HTMLElement>(
  Component: React.FC<Props<E>>,
): React.FC<Props<E>> => ({ children, ...props }) => {
  const [isLoaded, setLoadState] = useState(false);
  const handleLoad = () => setLoadState(true);

  useWindowEvent('load', handleLoad);

  return (
    <div className={isLoaded ? '' : s.scroll_disabled}>
      <Loader isHidden={isLoaded} />
      <Component {...props}>{children}</Component>
    </div>
  );
};
