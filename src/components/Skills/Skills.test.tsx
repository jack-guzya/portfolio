import React from 'react';
import { render } from '@testing-library/react';
import { Skills } from './Skills';

describe('Experience component', () => {
  test('should be rendered', () => {
    render(<Skills content={{ main: [], secondary: [] }} />);
  });
});
