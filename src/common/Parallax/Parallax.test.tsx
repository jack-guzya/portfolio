import React from 'react';
import { render } from '@testing-library/react';
import { Parallax } from './Parallax';

describe('Parallax', () => {
  test('should be rendered', () => {
    render(
      <Parallax>
        <h1>Test</h1>
      </Parallax>,
    );
  });
});
