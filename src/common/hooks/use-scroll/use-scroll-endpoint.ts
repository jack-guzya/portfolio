import { useRef } from 'react';
import useScroll, { TViewport } from './use-scroll';

type TOptions<C, U> = {
  endPoint: number;
  cb: C;
  upperCb?: U;
};

const handleScrollEndpoint = <E extends HTMLElement, C extends Function, U extends Function>(
  elemRef: React.MutableRefObject<E | null>,
  { endPoint, cb, upperCb }: TOptions<C, U>,
) => {
  let state: 'down' | 'up' = 'down';

  return (e: Event) => {
    const view = e.currentTarget as TViewport;
    const elem = elemRef.current;

    if (!view || !elem) {
      return;
    }

    const { clientHeight } = view;
    const { y } = elem.getBoundingClientRect();

    if (y < clientHeight * endPoint && state === 'down') {
      cb();
      state = 'up';

      return;
    }

    if (y > clientHeight * endPoint && state === 'up') {
      upperCb ? upperCb() : cb();
      state = 'down';
    }
  };
};

const useScrollEndpoint = <C extends Function, U extends Function>(
  viewport: TViewport,
  options: TOptions<C, U>,
) => {
  const ref = useRef(null);
  useScroll(viewport, handleScrollEndpoint(ref, options));

  return ref;
};

export default useScrollEndpoint;
