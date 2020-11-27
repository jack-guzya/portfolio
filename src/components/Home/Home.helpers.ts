type RGB = Array<number>;

type TGetStringRGB = (from: RGB, to: RGB, rate: number) => string;

const calculateColor = (from: number, to: number, rate: number) => from * (1 - rate) + to * rate;

const getStringRGB: TGetStringRGB = (from, to, rate) => {
  const R = 0;
  const G = 1;
  const B = 2;

  const r = calculateColor(from[R], to[R], rate);
  const g = calculateColor(from[G], to[G], rate);
  const b = calculateColor(from[B], to[B], rate);

  return `rgb(${r}, ${g}, ${b})`;
};

export default getStringRGB;
