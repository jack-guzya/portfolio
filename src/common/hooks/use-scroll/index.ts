import { useEffect } from 'react';

const useScroll = <T extends EventListenerOrEventListenerObject>(
  viewport: HTMLDivElement | null | undefined,
  handleScroll: T,
) => {
  useEffect(() => {
    viewport?.addEventListener('scroll', handleScroll);

    return () => viewport?.removeEventListener('scroll', handleScroll);
  });
};

export default useScroll;
