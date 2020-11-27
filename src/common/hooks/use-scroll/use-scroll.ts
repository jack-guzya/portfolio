import { useEffect } from 'react';

export interface IEvent<V extends EventTarget> extends Event {
  currentTarget: V | null
}

export interface IHandleScroll<V extends HTMLElement> extends EventListener {
  (e: IEvent<V>): void
}

const useScroll = <V extends HTMLElement>(
  viewport: V | null,
  handleScroll: IHandleScroll<V>,
) => {
  useEffect(() => {
    viewport?.addEventListener('scroll', handleScroll);

    return () => viewport?.removeEventListener('scroll', handleScroll);
  });
};

export default useScroll;