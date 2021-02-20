type StartingPoint = 'top' | 'bottom';

const getScrollRate = <E extends HTMLElement>(
  element: E,
  coordinate: StartingPoint = 'top',
  viewport = document.body,
) => {
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

const scrollHandler = <R extends HTMLElement>(
  elemRef: React.MutableRefObject<R | null>,
  ...cbList: Array<(scrollRate: number, elem: R) => void>
) => <T extends HTMLElement>(e: { currentTarget: T }) => {
  const viewport = e.currentTarget;
  const element = elemRef.current;

  if (!viewport || !element) {
    return;
  }

  const scrollRate = getScrollRate(element, 'top', viewport);

  cbList.forEach((cb) => cb(scrollRate, element));
};

export { scrollHandler, getScrollRate };
