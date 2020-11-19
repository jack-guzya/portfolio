import { useEffect } from 'react';

export type TViewport = HTMLDivElement | null | undefined;

const useScroll = <T extends EventListenerOrEventListenerObject>(
  viewport: TViewport,
  handleScroll: T,
) => {
  useEffect(() => {
    viewport?.addEventListener('scroll', handleScroll);

    return () => viewport?.removeEventListener('scroll', handleScroll);
  });
};

export default useScroll;