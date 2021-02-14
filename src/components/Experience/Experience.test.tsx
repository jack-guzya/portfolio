import React from 'react';
import { render } from '@testing-library/react';
import Experience, { TExperience } from '.';

const props: TExperience = {
  content: {
    list: [
      {
        name: 'test',
        main: ['test-main-skill'],
      },
    ],
  },
};

describe('Experience component', () => {
  test('should be rendered', () => {
    render(<Experience content={props.content} />);
  });
});
