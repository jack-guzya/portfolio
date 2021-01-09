import { useState } from 'react';

export type THookProps = { isActive?: boolean; autoUnmount?: boolean };

const useMountingTrigger = ({ isActive = false, autoUnmount = true }: THookProps = {}) => {
  const [isActiveTrigger, setTriggerState] = useState(isActive);
  const [isMount, setMountState] = useState(isActive);

  const handleTrigger = () => {
    setTriggerState(!isActiveTrigger);

    if (!isActiveTrigger) {
      setMountState(true);
      return;
    }
    
    autoUnmount && setMountState(false);
  };

  return { isMount, isActive: isActiveTrigger, handleTrigger, setMountState };
};

export default useMountingTrigger;
