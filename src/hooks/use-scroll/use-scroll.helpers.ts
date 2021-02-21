type StartingPoint = 'top' | 'bottom';

type Handler = (scrollRate: number, prevScrollRate: number, elem: HTMLElement) => void;

const checkValueTransition = (first: number, second: number) => {
  const toBoolean = (value: number) => value > 0;

  if (first === undefined || second === undefined) {
    return false;
  }

  return toBoolean(first) !== toBoolean(second);
};

export const getScrollRate = <E extends HTMLElement>(
  element: E,
  startingPoint: StartingPoint = 'top',
) => {
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

export const scrollHandler = <R extends HTMLElement>(
  elemRef: React.MutableRefObject<R | null>,
  ...cbList: Array<Handler>
): EventListener => {
  let prevScrollRate: number;

  return () => {
    const element = elemRef.current;

    if (!element) {
      return;
    }

    const scrollRate = getScrollRate(element);

    cbList.forEach((cb) => cb(scrollRate, prevScrollRate, element));
    prevScrollRate = scrollRate;
  };
};

export const valueTransitionHandler = (...cbList: Array<(elem: HTMLElement) => void>) => (
  scrollRate: number,
  prevScrollRate: number,
  elem: HTMLElement,
) => {
  if (checkValueTransition(scrollRate, prevScrollRate)) {
    cbList.forEach((cb) => cb(elem));
  }
};
