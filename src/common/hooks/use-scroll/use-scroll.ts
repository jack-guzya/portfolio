import { useEffect } from 'react';

export type TViewport = HTMLDivElement | null | undefined;

const useScroll = <V extends HTMLElement, T extends EventListenerOrEventListenerObject>(
  viewport: V | null,
  handleScroll: T,
) => {
  useEffect(() => {
    viewport?.addEventListener('scroll', handleScroll);

    return () => viewport?.removeEventListener('scroll', handleScroll);
  });
};

export default useScroll;