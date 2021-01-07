import { useState } from 'react';

type TProps = { isActive?: boolean; autoUnmount?: boolean };

const useMountingTrigger = (props: TProps = { isActive: false, autoUnmount: false }) => {
  const [isActiveTrigger, setTriggerState] = useState(props.isActive);
  const [isMount, setMountState] = useState(props.isActive);

  const handleTrigger = () => {
    setTriggerState(!isActiveTrigger);

    if (!isActiveTrigger) {
      setMountState(true);
      return;
    }

    props.autoUnmount && setMountState(false);
  };

  return { isMount, isActive: isActiveTrigger, handleTrigger, setMountState };
};


export default useMountingTrigger;