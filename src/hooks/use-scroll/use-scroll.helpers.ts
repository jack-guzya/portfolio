type StartingPoint = 'top' | 'bottom';

type Handler = (scrollRate: number, prevScrollRate: number, elem: HTMLElement) => void;

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

export const addScrollHandlers = <R extends HTMLElement>(
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

const roundNumber = (value: number, charAmount = 2) =>
  Math.round(value * 10 ** charAmount) / 10 ** charAmount;

const checkRateTransition = (targetRate: number, prevRate: number) => {
  if (targetRate === undefined || prevRate === undefined) {
    return false;
  }

  const roundedTargetRate = roundNumber(targetRate);

  return prevRate < 0 ? roundedTargetRate >= 0 : roundedTargetRate <= 0;
};

export const addRateTransitionHandlers = (...cbList: Array<(elem: HTMLElement) => void>) => (
  scrollRate: number,
  prevScrollRate: number,
  elem: HTMLElement,
) => {
  if (checkRateTransition(scrollRate, prevScrollRate)) {
    cbList.forEach((cb) => cb(elem));
  }
};
