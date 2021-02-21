import { useEffect } from 'react';

const useScroll = (handleScroll: EventListener, { isInit } = { isInit: true }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    isInit && window.dispatchEvent(new Event('scroll'));

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isInit]);
};

export default useScroll;
