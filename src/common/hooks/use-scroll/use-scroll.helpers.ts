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

export default getClientScrollRate;
