import { useRef } from 'react';
import useScroll, { IHandleScroll, IEvent } from './use-scroll';
import getClientScrollRate from './use-scroll.helpers';

type TOptions<C, U> = {
  endPoint: number;
  cb: C;
  upperCb?: U;
};

const handleScrollEndpoint = <E extends HTMLElement, C extends Function, U extends Function>(
  elemRef: React.MutableRefObject<E | null>,
  { endPoint, cb, upperCb }: TOptions<C, U>,
): IHandleScroll<E> => {
  let state: 'down' | 'up' = 'down';

  return <V extends HTMLElement>(e: IEvent<V>) => {
    const viewport = e.currentTarget;
    const element = elemRef.current;

    if (!viewport || !element) {
      return;
    }

    const scrollRate = getClientScrollRate({ viewport, element });

    if (scrollRate < endPoint && state === 'down') {
      cb();
      state = 'up';

      return;
    }

    if (scrollRate > endPoint && state === 'up') {
      upperCb ? upperCb() : cb();
      state = 'down';
    }
  };
};

const useScrollEndpoint = <V extends HTMLElement, C extends Function, U extends Function>(
  viewport: V | null,
  options: TOptions<C, U>,
) => {
  const ref = useRef(null);
  useScroll(viewport, handleScrollEndpoint(ref, options));

  return ref;
};

export default useScrollEndpoint;
