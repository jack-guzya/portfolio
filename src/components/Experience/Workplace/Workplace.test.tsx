import React from 'react';
import { render, screen } from '@testing-library/react';
import Workplace from '.';

describe('Workplace component', () => {
  test('should be rendered and have the default link', () => {
    render(<Workplace name="Test name" date="Feb 2020 - Jul 2020" role="Test role" />);
    const nameElement = screen.getByText(/Test name/i);
  
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.getAttribute('href')).toBe('#');
  });
});
