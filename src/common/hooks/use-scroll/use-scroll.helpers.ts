type TScrollRateParams<V, E> = {
  viewport: V;
  element: E;
  coordinate?: 'top' | 'bottom';
};

const getClientScrollRate = <V extends HTMLElement, E extends HTMLElement>({
  viewport,
  element,
  coordinate,
}: TScrollRateParams<V, E>) => {
  const { clientHeight } = viewport;
  const { top, bottom } = element.getBoundingClientRect();

  switch (coordinate) {
    case 'bottom':
      return bottom / clientHeight;

    case 'top':
      return top / clientHeight;

    default:
      return top / clientHeight;
  }
};

type TOptions<C, U> = {
  endPoint: number;
  cb: C;
  upperCb?: U;
};

const getEndpointHandler = <R extends HTMLElement, C extends Function, U extends Function>(
  elemRef: React.MutableRefObject<R | null>,
  { endPoint, cb, upperCb }: TOptions<C, U>,
) => {
  let state: 'down' | 'up' = 'down';

  return <T extends HTMLElement>(e: { currentTarget: T }) => {
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

export { getEndpointHandler, getClientScrollRate };
