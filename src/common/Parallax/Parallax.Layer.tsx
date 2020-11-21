import React, { CSSProperties } from 'react';
import classnames from 'classnames';
import { DEFAULT_PERSPECTIVE } from './Parallax.constants';

import s from './Parallax.module.css';

type TCreateLayer<P> = (layer: number, perspective?: number) => React.FC<SpreadingProps<P>>;

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

export default createLayer;
