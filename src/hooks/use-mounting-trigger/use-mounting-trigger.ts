import { useState } from 'react';

export type MountingTriggerParams = { isActive?: boolean; autoUnmount?: boolean };

export const useMountingTrigger = ({
  isActive = false,
  autoUnmount = true,
}: MountingTriggerParams = {}) => {
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

  const unmount = () => !isActiveTrigger && setMountState(false);

  return { isMount, isActive: isActiveTrigger, handleTrigger, setMountState, unmount };
};
