import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Front-end Developer/i);
  expect(linkElement).toBeInTheDocument();
});
