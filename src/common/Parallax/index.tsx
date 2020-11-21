import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import useCallbackRef from '../hooks/use-callback-ref';
import s from './Parallax.module.css';

interface IProps<P> extends React.DetailedHTMLProps<React.HTMLAttributes<P>, P> {}

interface IContainerProps<P> extends IProps<P> {
  children: <E extends HTMLElement>(parent: E, perspective?: number) => React.ReactNode;
  perspective?: number;
}

type TCreateLayer<T> = (layer: number, perspective?: number) => React.FC<IProps<T>>;

const DEFAULT_PERSPECTIVE = 600;

const Container: React.FC<IContainerProps<HTMLDivElement>> = ({
  children,
  className = '',
  perspective = DEFAULT_PERSPECTIVE,
  ...props
}) => {
  const [parent, callbackRef] = useCallbackRef<HTMLDivElement>();
  const CSSClass = classnames(s.container, { [className]: !!className });

  return (
    <div
      className={CSSClass}
      ref={callbackRef}
      style={{ perspective: `${perspective}px`, ...props.style }}
      {...props}
    >
      {parent && children(parent, perspective)}
    </div>
  );
};

const Group: React.FC<IProps<HTMLDivElement>> = ({ children, className = '', ...props }) => {
  const CSSClass = classnames(s.group, { [className]: !!className });

  return (
    <div className={CSSClass} {...props}>
      {children}
    </div>
  );
};

const createLayer: TCreateLayer<HTMLDivElement> = (layer, perspective = DEFAULT_PERSPECTIVE) => ({
  children,
  className = '',
  ...props
}) => {
  const CSSClass = classnames(s.layer, { [className]: !!className });
  const layerTransform: CSSProperties = {
    transform: `translateZ(${-perspective * layer}px) scale(${1 + layer})`,
  };

  return (
    <div className={CSSClass} style={{ ...layerTransform, ...props.style }} {...props}>
      {children}
    </div>
  );
};

export default Container;

export { Container, Group, createLayer };
