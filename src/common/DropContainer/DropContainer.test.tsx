import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import DropContainer, { TOptions } from '.';

describe('DropContainer component', () => {
  afterEach(cleanup);

  let options: TOptions = {};

  const TestComponent = () => (
    <DropContainer
      options={options}
      trigger={({ handleTrigger }) => (
        <button type="button" onClick={handleTrigger}>
          Button
        </button>
      )}
    >
      {() => <div>Test</div>}
    </DropContainer>
  );

  const queryContainer = () => screen.queryByText(/Test/i);
  const queryButton = () => screen.queryByText(/Button/i);
  const click = () => fireEvent.click(queryButton() as HTMLElement);

  test('should be rendered correctly', () => {
    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();
    expect(queryButton()).toBeInTheDocument();
  });

  test('should mount/unmount a container by clicking on the trigger', async () => {
    render(<TestComponent />);

    expect(queryContainer()).not.toBeInTheDocument();

    click();
    await waitFor(queryContainer);

    expect(queryContainer()).toBeInTheDocument();

    click();
    await waitFor(queryContainer);

    expect(queryContainer()).not.toBeInTheDocument();
  });

  test('should have an able to get options', async () => {
    options = {
      isActive: true,
      autoUnmount: false,
    };

    render(<TestComponent />);

    expect(queryContainer()).toBeInTheDocument();

    click();
    await waitFor(queryContainer);

    expect(queryContainer()).toBeInTheDocument();
  });
});
