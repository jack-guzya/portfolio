import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import s from './Loader.module.css';

export const Loader: React.FC<SpreadingProps<HTMLDivElement> & { isHidden: boolean }> = ({
  isHidden,
}) => {
  const [isMounted, setMountState] = useState(true);
  const handleTransitionEnd = () => {
    setMountState(false);
  };

  useEffect(() => {
    if (!isHidden) {
      setMountState(true);
    }
  }, [isHidden]);

  const cssClass = classnames(s.container, { [s.hide]: isHidden });

  return isMounted ? (
    <>
      <div className={cssClass} onTransitionEnd={handleTransitionEnd}>
        {!isHidden && <div className={s.loader} />}
      </div>
    </>
  ) : null;
};
