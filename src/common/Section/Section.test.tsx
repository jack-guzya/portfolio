import React from 'react';
import { render, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section component', () => {
  test('should be rendered', () => {
    render(<Section>Test section</Section>);
    const sectionElement = screen.getByText(/Test section/i);

    expect(sectionElement).toBeInTheDocument();
  });
});
