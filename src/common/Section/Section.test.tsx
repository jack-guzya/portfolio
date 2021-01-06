import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from '.';

describe('Section component', () => {
  test('should be rendered', () => {
    render(<Section>Test section</Section>);
    const sectionElement = screen.getByText(/Test section/i);

    expect(sectionElement).toBeInTheDocument();
  });

  test('should have a correct css class', () => {
    render(<Section>Test section</Section>);
    const sectionElement = screen.getByText(/Test section/i).parentNode as HTMLElement;

    expect(sectionElement.className).toBe('wrapper');
  });

  test('should have the capability to add css classes', () => {
    const cssClass = 'test-class';
    render(<Section className={cssClass}>Test section</Section>);
    const sectionElement = screen.getByText(/Test section/i).parentNode as HTMLElement;

    expect(sectionElement.className).toBe(`wrapper ${cssClass}`);
  });
});
