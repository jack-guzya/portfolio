import React from 'react';
import { render, screen } from '@testing-library/react';
import Workplace, { renderListItem } from '.';

const data = [
  'Jul 2020 - Sep 2020',
  'Student',
  {
    link: 'https://rs.school',
    text: 'site',
  },
  {
    link: 'https://epam.com',
  },
];

describe('renderListItem', () => {
  beforeEach(() => render(<ul>{data.map(renderListItem)}</ul>));

  test('should render a list item', () => {
    expect(screen.getByText(data[0])).toBeInTheDocument();
  });

  test('should render a list item with a link', () => {
    const item = screen.getByText('site');

    expect(item).toBeInTheDocument();
    expect(item.getAttribute('href')).toBe(data[2].link);
  });

  test('should render a list item with a link that has no text parameter', () => {
    expect(screen.getByText(data[3].link)).toBeInTheDocument();
  });
});

describe('Workplace component', () => {
  test('should be rendered', () => {
    render(<Workplace name="Test name" main={data} />);

    expect(screen.getByText(/Test name/i)).toBeInTheDocument();
    expect(screen.getByText(data[0])).toBeInTheDocument();
  });
});
