import React from 'react';
import classnames from 'classnames';
import { DEFAULT_PERSPECTIVE } from './Parallax.constants';

import s from './Parallax.module.css';

const createLayer = (layer: number, perspective: number = DEFAULT_PERSPECTIVE) =>
  React.forwardRef<HTMLDivElement, SpreadingProps<HTMLDivElement>>(({ children, className = '', ...props }, ref) => {
    const CSSClass = classnames(s.layer, { [className]: !!className });
    const layerTransform = {
      transform: `translateZ(${-perspective * layer}px) scale(${1 + layer})`,
    };

    return (
      <div className={CSSClass} style={{ ...layerTransform, ...props.style }} ref={ref} {...props}>
        {children}
      </div>
    );
  });

export default createLayer;
