import { useEffect } from 'react';

export interface IEvent<V extends EventTarget> extends Event {
  currentTarget: V | null
}

export interface IHandleScroll<E extends Event> extends EventListener {
  (e: E): void
}

const useScroll = <V extends HTMLElement>(
  viewport: V | null,
  handleScroll: IHandleScroll<IEvent<V>>,
) => {
  useEffect(() => {
    viewport?.addEventListener('scroll', handleScroll);

    return () => viewport?.removeEventListener('scroll', handleScroll);
  });
};

export default useScroll;