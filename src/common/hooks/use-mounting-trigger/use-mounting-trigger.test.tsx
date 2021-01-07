/* eslint-disable prefer-const */
import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import useMountingTrigger from '.';

describe('useMountingTrigger hook', () => {
  let triggerParams = {};
  let props: SpreadingProps<HTMLDivElement>;
  let triggerState: ReturnType<typeof useMountingTrigger>;

  const TestComponent = () => {
    let params = useMountingTrigger(triggerParams);
    triggerState = params;

    return (
      <>
        <button type="button" onClick={triggerState.handleTrigger}>
          Trigger
        </button>
        {triggerState.isMount && <div {...props}>Test container</div>}
      </>
    );
  };

  const click = () => fireEvent.click(screen.getByText(/Trigger/i));
  const queryContainer = () => screen.queryByText(/Test container/i);
  const getContainer = () => screen.getByText(/Test container/i);

  afterEach(() => {
    cleanup();
    triggerParams = {};
  });

  test('a container should be unmounted by default values', () => {
    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();
  });

  test('a container should be mounted if the isActive prop is true', () => {
    triggerParams = { isActive: true };

    render(<TestComponent />);

    expect(queryContainer()).toBeInTheDocument();
  });

  test('a trigger should mount/unmount a container by click and an autoUnmount prop is true', async () => {
    triggerParams = {
      autoUnmount: true,
    };

    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();

    click();
    await waitFor(queryContainer);

    expect(queryContainer()).toBeInTheDocument();

    click();
    await waitFor(queryContainer);
    
    expect(queryContainer()).not.toBeInTheDocument();
  });

  test('a trigger should not unmount a container by click and an autoUnmount prop is false', async () => {
    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();

    click();
    click();
    await waitFor(queryContainer);

    expect(queryContainer()).toBeInTheDocument();
  });

  test('a trigger should unmount a container by occurring some event', async () => {
    props = {
      onAnimationEnd: () => !triggerState.isActive && triggerState.setMountState(false),
    };

    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();

    click();
    click();
    fireEvent.animationEnd(getContainer());
    await waitFor(queryContainer);

    expect(queryContainer()).not.toBeInTheDocument();
  });
});
