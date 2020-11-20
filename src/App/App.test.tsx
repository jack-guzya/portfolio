import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, my Friend/i);
  expect(linkElement).toBeInTheDocument();
});
