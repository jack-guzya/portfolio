import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Container, createLayer, Group } from '.';

describe('Parallax Container', () => {
  afterEach(cleanup);
  let parent: HTMLElement | null;

  const renderContainer = (perspective?: number) =>
    render(
      <Container perspective={perspective}>
        {(node) => {
          parent = node;
          return (
            <>
              <h1>Heading</h1>
              <div>Test container</div>
            </>
          );
        }}
      </Container>,
    );

  test('should renders children', () => {
    renderContainer();

    expect(screen.getByText(/Test container/i)).toBeInTheDocument();
    expect(screen.getByText(/Heading/i)).toBeInTheDocument();
  });

  test('should give the down ref to its children', () => {
    renderContainer();

    expect(parent).not.toBeNull();
  });

  test('should contain the default perspective value in styles', () => {
    renderContainer();

    const container = screen.getByText(/Test container/i).parentElement;
    const perspective = container?.style.perspective;

    expect(perspective && +perspective.replace(/px|%|en|rem/, '')).not.toBeNaN();
  });

  test('should have the ability to change a perspective value', () => {
    renderContainer(400);

    const container = screen.getByText(/Test container/i).parentElement;
    const perspective = container?.style.perspective;

    expect(perspective && +perspective.replace(/px|%|en|rem/, '')).toBe(400);
  });
});

describe('Parallax Group', () => {
  afterEach(cleanup);

  test('should renders children', () => {
    render(
      <Group>
        <h1>First child</h1>
        <div>Second child</div>
      </Group>,
    );

    expect(screen.getByText(/First child/i)).toBeInTheDocument();
    expect(screen.getByText(/Second child/i)).toBeInTheDocument();
  });
});

describe('Parallax Layer', () => {
  const Base = createLayer(0, 600);
  const Back = createLayer(1, 600);

  beforeEach(() => {
    render(
      <>
        <Base>
          <h1>Base Layer</h1>
        </Base>
        <Back>
          <h1>Back Layer</h1>
        </Back>
      </>,
    );
  });
  afterEach(cleanup);
  test('should renders children', () => {
    expect(screen.getByText(/Base Layer/i)).toBeInTheDocument();
    expect(screen.getByText(/Back Layer/i)).toBeInTheDocument();
  });

  test('createLayer function should create a Parallax layer with transform value', () => {
    expect(screen.getByText(/Base Layer/i).parentElement?.style.transform).toContain('translateZ(0px) scale(1)');
    expect(screen.getByText(/Back Layer/i).parentElement?.style.transform).toContain('translateZ(-600px) scale(2)');
  });
});
