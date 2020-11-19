import React from 'react';
import classnames from 'classnames';
import useCallbackRef from '../hooks/use-callback-ref';
import s from './Parallax.module.css';

interface IParallaxProps<P>
  extends React.DetailedHTMLProps<React.HTMLAttributes<P>, P> {
  back: (ref: P | null) => React.ReactNode;
  base: (ref: P | null) => React.ReactNode;
}

const Parallax: React.FC<IParallaxProps<HTMLDivElement>> = ({ back, base, ...props }) => {
  const [parent, callbackRef] = useCallbackRef<HTMLDivElement>();

  return (
    <div className={s.container} ref={callbackRef} {...props}>
      {parent && (
        <>
          <div className={classnames(s.layer, s['layer--back'])}>{back(parent)}</div>
          <div className={classnames(s.layer, s['layer--base'])}>{base(parent)}</div>
        </>
      )}
    </div>
  );
};

export default Parallax;
