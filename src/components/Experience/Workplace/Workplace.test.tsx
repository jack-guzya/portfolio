import React from 'react';
import { render, screen } from '@testing-library/react';
import Workplace from '.';

describe('Workplace component', () => {
  test('should be rendered and have the default link', () => {
    render(<Workplace name="Test name" date="Feb 2020 - Jul 2020" role="Test role" />);

    expect(screen.getByText(/Test name/i)).toBeInTheDocument();
    expect(document.querySelector('a')?.getAttribute('href')).toBe('#');
  });
});
