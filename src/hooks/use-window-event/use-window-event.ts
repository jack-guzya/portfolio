import { useEffect } from 'react';

export type Params = {
  isInitiallyStarted?: boolean;
};

export const useWindowEvent = (
  type: string,
  eventListener: EventListener,
  { isInitiallyStarted }: Params = {},
) => {
  useEffect(() => {
    window.addEventListener(type, eventListener);

    isInitiallyStarted && window.dispatchEvent(new Event(type));

    return () => window.removeEventListener(type, eventListener);
  }, [eventListener, isInitiallyStarted, type]);
};
