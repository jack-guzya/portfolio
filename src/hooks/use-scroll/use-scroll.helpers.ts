type StartingPoint = 'top' | 'bottom';

const getScrollRate = <E extends HTMLElement>(element: E, startingPoint: StartingPoint = 'top') => {
  const { outerHeight } = window;
  const { top, bottom } = element.getBoundingClientRect();

  switch (startingPoint) {
    case 'bottom':
      return bottom / outerHeight;

    case 'top':
      return top / outerHeight;

    default:
      return top / outerHeight;
  }
};

const scrollHandler = <R extends HTMLElement>(
  elemRef: React.MutableRefObject<R | null>,
  ...cbList: Array<(scrollRate: number, elem: R) => void>
): EventListener => () => {
  const element = elemRef.current;

  if (!element) {
    return;
  }

  const scrollRate = getScrollRate(element);

  cbList.forEach((cb) => cb(scrollRate, element));
};

export { scrollHandler, getScrollRate };
