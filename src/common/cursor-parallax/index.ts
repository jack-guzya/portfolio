type TCoords = {
  elemWidth: number;
  elemHeight: number;
  cursorX: number;
  cursorY: number;
};

type TElemPosition = {
  translateX?: number;
  translateY?: number;
  coefficient?: number;
};

type TCursorPosition = {
  x: number;
  y: number;
};

type TElemOffset = TElemPosition &
TCursorPosition & {
  correctCoefficientY?: number;
};

const getCursorOffset = ({
  elemWidth,
  elemHeight,
  cursorX,
  cursorY,
}: TCoords): TCursorPosition => ({
  x: cursorX - elemWidth / 2,
  y: cursorY - elemHeight / 2,
});

const getElemOffset = (params: TElemOffset) => {
  const {
    translateX = 0,
    translateY = 0,
    coefficient = 0.1,
    correctCoefficientY = 6,
    x,
    y,
  } = params;

  return {
    X: x * coefficient + translateX,
    Y: y * coefficient * correctCoefficientY + translateY,
  };
};

const createTranslateString = (x: number, y: number) => `translate(${x}%, ${y}%)`;

const addOffset = (cursorPos: TCursorPosition, positionList: Array<TElemPosition>) => (
  child: HTMLElement,
  index: number,
) => {
  const position = positionList[index];
  if (!position) {
    return;
  }

  const elemOffset = getElemOffset({ ...cursorPos, ...position });
  // eslint-disable-next-line no-param-reassign
  child.style.transform = createTranslateString(elemOffset.X, elemOffset.Y);
};

const cursorParallax = (...positionList: Array<TElemPosition>) => (
  e: React.MouseEvent<HTMLElement>,
) => {
  const { children, clientHeight, clientWidth } = e.currentTarget;

  if (!children.length) {
    return;
  }

  const cursorOffset = getCursorOffset({
    elemWidth: clientWidth,
    elemHeight: clientHeight,
    cursorY: e.clientY,
    cursorX: e.clientX,
  });

  const childList = Array.prototype.slice.call(children);
  childList.forEach(addOffset(cursorOffset, positionList));
};

export default cursorParallax;

export { getCursorOffset, getElemOffset, addOffset, createTranslateString };
