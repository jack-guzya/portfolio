import { useEffect } from 'react';

export const useScroll = (handleScroll: EventListener, { isInit } = { isInit: true }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    isInit && window.dispatchEvent(new Event('scroll'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isInit]);
};
