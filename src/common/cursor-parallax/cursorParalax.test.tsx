import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import cursorParallax, { getCursorOffset, getElemOffset, createTranslateString } from '.';

test('getCursorOffset should return cursor coords relative to a center of an element', () => {
  [
    {
      elemWidth: 500,
      elemHeight: 700,
      cursorX: 200,
      cursorY: 100,
      offsetX: -50,
      offsetY: -250,
    },
    {
      elemWidth: 300,
      elemHeight: 800,
      cursorX: 250,
      cursorY: 500,
      offsetX: 100,
      offsetY: 100,
    },
    {
      elemWidth: 500,
      elemHeight: 700,
      cursorX: 100,
      cursorY: 600,
      offsetX: -150,
      offsetY: 250,
    },
  ].forEach((param) => {
    const { x, y } = getCursorOffset(param);

    expect(x).toBe(param.offsetX);
    expect(y).toBe(param.offsetY);
  });
});

test('getElemOffset should return elem offsets as translate x/y params', () => {
  [
    {
      translateX: 10,
      translateY: 10,
      coefficient: 0.1,
      x: -50,
      y: 250,
      offsetX: 5,
      offsetY: 160,
    },
    {
      translateX: 50,
      translateY: 50,
      coefficient: 0.1,
      x: 100,
      y: -100,
      offsetX: 60,
      offsetY: -10,
    },
    {
      x: -150,
      y: -250,
      offsetX: -15,
      offsetY: -150,
    },
  ].forEach((param) => {
    const { X, Y } = getElemOffset(param);

    expect(X).toBe(param.offsetX);
    expect(Y).toBe(param.offsetY);
  });
});

test('createTranslateString should return a translate string with x/y offsets, %', () => {
  expect(createTranslateString(10, 5)).toBe('translate(10%, 5%)');
});

describe('cursorParallax: ', () => {
  type ReturnArgsType<F extends (...args: any[]) => void> = F extends (...args: infer A) => void
    ? A
    : unknown;

  type TParams = ReturnArgsType<typeof cursorParallax>;

  type TMouseEventObj = {
    [T in keyof MouseEvent]?: MouseEvent[T];
  };

  const TestComponent: React.FC<{ params: TParams }> = ({ params }) => (
    <div onMouseMove={cursorParallax(...params)}>
      <h2>Hi, my Friend!</h2>
      <h2>I am Evgeniy!</h2>
    </div>
  );

  const dispatchMouseEvent = (eventParams: TMouseEventObj) => {
    const firstChild = screen.getByText(/Hi, my Friend/i);
    const secondChild = screen.getByText(/I am Evgeniy!/i);
    const { parentElement } = firstChild;

    fireEvent.mouseMove(parentElement as HTMLElement, eventParams);

    return [firstChild, secondChild];
  };

  afterEach(cleanup);

  test('should moves child elements without init params', () => {
    render(<TestComponent params={[{}, {}]} />);
    const [firstChild, secondChild] = dispatchMouseEvent({ clientY: 10, clientX: 10 });

    expect(firstChild.style.transform).toBe(createTranslateString(1, 6));
    expect(secondChild.style.transform).toBe(createTranslateString(1, 6));
  });

  test('should moves child elements with init params', () => {
    render(
      <TestComponent
        params={[{ translateX: 10, translateY: 15, coefficient: 0.2 }, { coefficient: 0.3 }]}
      />,
    );
    const [firstChild, secondChild] = dispatchMouseEvent({ clientY: 10, clientX: 10 });

    expect(firstChild.style.transform).toBe(createTranslateString(12, 27));
    expect(secondChild.style.transform).toBe(createTranslateString(3, 18));
  });
});
