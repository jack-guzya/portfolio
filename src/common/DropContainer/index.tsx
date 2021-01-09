import React from 'react';
import useMountingTrigger, { THookProps } from '../hooks/use-mounting-trigger';

export type TOptions = THookProps;

type TProps = SpreadingProps<HTMLDivElement> & {
  children: (state: ReturnType<typeof useMountingTrigger>) => React.ReactNode;
  trigger: (state: ReturnType<typeof useMountingTrigger>) => React.ReactNode;
  options?: TOptions;
};

const DropContainer: React.FC<TProps> = ({ trigger, children, options, ...props }) => {
  const triggerState = useMountingTrigger(options);

  return (
    <div {...props}>
      {trigger(triggerState)}
      {triggerState.isMount && children(triggerState)}
    </div>
  );
};

export default DropContainer;
