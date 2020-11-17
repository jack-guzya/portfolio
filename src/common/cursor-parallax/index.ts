type TCoords = {
  width: number;
  height: number;
  clientX: number;
  clientY: number;
  coefficient: number;
};

type TInitParams = {
  translateX: number;
  translateY: number;
  coefficient: number;
};

const getOffset = ({ width, height, clientX, clientY, coefficient }: TCoords) => ({
  x: (width / 2 - clientX) * coefficient,
  y: (height / 2 - clientY) * coefficient,
});

const cursorParallax = (initParams: TInitParams) => (e: React.MouseEvent<HTMLElement>) => {
  const { firstElementChild: child, clientHeight, clientWidth } = e.currentTarget;
  const { translateX, translateY, coefficient } = initParams;

  if (!child) {
    return;
  }

  const { x, y } = getOffset({
    width: clientWidth,
    height: clientHeight,
    clientY: e.clientY,
    clientX: e.clientX,
    coefficient,
  });

  (child as HTMLElement).style.transform = `translate(${translateX + x}%, ${translateY + y}%)`;
};

export default cursorParallax;
