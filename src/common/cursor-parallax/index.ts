type TCoords = {
  width: number;
  height: number;
  clientX: number;
  clientY: number;
};

type TElemPosition = {
  translateX: number;
  translateY: number;
  coefficient: number;
};

type TCursorPosition = {
  x: number;
  y: number;
};

const getCursorOffset = ({ width, height, clientX, clientY }: TCoords): TCursorPosition => ({
  x: width / 2 - clientX,
  y: height / 2 - clientY,
});

const addOffset = ({ x, y }: TCursorPosition, positionList: Array<TElemPosition>) => (
  child: HTMLElement,
  index: number,
) => {
  const position = positionList[index];
  if (!position) {
    return;
  }

  const { translateX, translateY, coefficient } = position;
  const CORRECTED_COEFFICIENT = 6;
  const translateWithOffset = {
    X: x * coefficient + translateX,
    Y: y * coefficient * CORRECTED_COEFFICIENT + translateY,
  };
  // eslint-disable-next-line no-param-reassign
  child.style.transform = `translate(${translateWithOffset.X}%, ${translateWithOffset.Y}%)`;
};

const cursorParallax = (...positionList: Array<TElemPosition>) => (
  e: React.MouseEvent<HTMLElement>,
) => {
  const { children, clientHeight, clientWidth } = e.currentTarget;

  if (!children.length) {
    return;
  }

  const cursorOffset = getCursorOffset({
    width: clientWidth,
    height: clientHeight,
    clientY: e.clientY,
    clientX: e.clientX,
  });

  const childList = Array.prototype.slice.call(children);
  childList.forEach(addOffset(cursorOffset, positionList));
};

export default cursorParallax;
