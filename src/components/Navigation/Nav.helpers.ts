import { useWindowEvent, Params } from '../../hooks/use-window-event';

export const useSectionEvent = (listener: EventListener, params?: Params) =>
  useWindowEvent('sectiontop', listener, params);
