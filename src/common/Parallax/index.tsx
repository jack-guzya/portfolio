import React from 'react';
import classnames from 'classnames';
import useCallbackRef from '../hooks/use-callback-ref';
import s from './Parallax.module.css';

interface IParallax<P> extends React.DetailedHTMLProps<React.HTMLAttributes<P>, P> {}
interface IParallaxContainer<P> extends IParallax<P> {
  children: <E extends HTMLElement>(parent: E) => React.ReactNode;
}

const Parallax: React.FC<IParallaxContainer<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  const [parent, callbackRef] = useCallbackRef<HTMLDivElement>();
  const CSSClass = classnames(s.container, { [className]: !!className });

  return (
    <div className={CSSClass} ref={callbackRef} {...props}>
      {parent && children(parent)}
    </div>
  );
};

const createParallaxChild = (...classes: Array<string>): React.FC<IParallax<HTMLDivElement>> => ({
  children,
  className = '',
  ...props
}) => {
  const CSSClass = classnames(...classes, { [className]: !!className });

  return (
    <div className={CSSClass} {...props}>
      {children}
    </div>
  );
};

const Group = createParallaxChild(s.group);
const Base = createParallaxChild(s.layer, s['layer--base']);
const Back = createParallaxChild(s.layer, s['layer--back']);

export default Parallax;

export { Back, Base, Group };
