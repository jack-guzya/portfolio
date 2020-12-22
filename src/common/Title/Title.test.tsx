import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '.';

describe('Title component', () => {
  test('should be rendered', () => {
    render(<Title>Test title</Title>);
    const titleElement = screen.getByText(/Test title/i);
  
    expect(titleElement).toBeInTheDocument();
  });

  test('should have a correct css class', () => {
    render(<Title>Test title</Title>);
    const titleElement = screen.getByText(/Test title/i);
  
    expect(titleElement.className).toBe('title');
  });

  test('should have the capability to add css classes', () => {
    const cssClass = 'test-class';
    render(<Title className={cssClass}>Test title</Title>);
    const titleElement = screen.getByText(/Test title/i);

    expect(titleElement.className).toBe(`title ${cssClass}`);
  });
});
