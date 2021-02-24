import { useWindowEvent, Params } from '../use-window-event';

export * from './use-scroll.helpers';

export const useScroll = (scrollListener: EventListener, params?: Params) =>
  useWindowEvent('scroll', scrollListener, params);
