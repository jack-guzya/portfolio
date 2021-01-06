import React, { useRef } from 'react';
import { createLayer } from '../../common/Parallax';
import { useScroll, getClientScrollRate } from '../../common/hooks/use-scroll';
import { IEvent } from '../../common/hooks/use-scroll/use-scroll';
import getStringRGB from './Home.helpers';

import s from './Home.module.css';

const Base = createLayer(0);
const FirstLayer = createLayer(0.3);
const SecondLayer = createLayer(1);
const ThirdLayer = createLayer(2);
const FourthLayer = createLayer(3);
const FiveLayer = createLayer(5);

const RGB = {
  fiveLayer: {
    from: [182, 220, 230],
    to: [182, 130, 70],
  },
  sun: {
    from: [255, 255, 255],
    to: [255, 120, 0],
  },
};

type TProps<V> = {
  children: React.ReactNode;
  viewport: V;
};

const Background = <V extends HTMLElement>({ children, viewport }: TProps<V>) => {
  const baseRef = useRef<HTMLDivElement>(null);
  const firstLayerRef = useRef<HTMLDivElement>(null);
  const fiveLayerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  const handleScroll = <E extends HTMLElement>(e: IEvent<E>) => {
    const base = baseRef.current;
    const firstLayer = firstLayerRef.current;
    const fiveLayer = fiveLayerRef.current;
    const sun = sunRef.current;
    const view = e.currentTarget;

    if (!firstLayer || !sun || !fiveLayer || !view || !base) {
      return;
    }

    const scrollRate =
      1 - getClientScrollRate({ viewport: view, element: base, coordinate: 'bottom' });

    if (scrollRate > 1) {
      return;
    }

    firstLayer.style.filter = `grayscale(${scrollRate * 2})`;
    fiveLayer.style.backgroundColor = getStringRGB(
      RGB.fiveLayer.from,
      RGB.fiveLayer.to,
      scrollRate,
    );
    sun.style.backgroundColor = getStringRGB(RGB.sun.from, RGB.sun.to, scrollRate);
  };

  useScroll(viewport, handleScroll);

  return (
    <>
      <FirstLayer className={`${s.bg} ${s.face}`} ref={firstLayerRef} />
      <SecondLayer className={`${s.bg} ${s.second}`} />
      <ThirdLayer className={`${s.bg} ${s.third}`} />
      <FourthLayer className={`${s.bg} ${s.fourth}`} />
      <FiveLayer className={s.five} ref={fiveLayerRef}>
        <div className={s.sun} ref={sunRef} />
      </FiveLayer>
      <Base className={s.home} ref={baseRef}>
        {children}
      </Base>
    </>
  );
};

export default Background;