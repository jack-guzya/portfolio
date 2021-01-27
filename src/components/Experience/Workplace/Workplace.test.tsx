import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Workplace, { renderListItem } from '.';
import s from './Workplace.module.css';

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
  const title = 'Test name';
  const titleElement = () => screen.getByText(title);
  const detailsContainer = () => document.querySelector(`.${s.details}`);

  beforeEach(() => render(<Workplace name={title} main={data} />));

  test('should be rendered', () => {
    expect(titleElement()).toBeInTheDocument();
    expect(screen.getByText(data[0])).toBeInTheDocument();
  });

  test('css class of details ("show") should be changed by clicking the button (title)', () => {
    const getStyle = () => detailsContainer()?.className;
    const before = getStyle();

    fireEvent.click(titleElement());
    expect(before).not.toBe(getStyle());

    fireEvent.click(titleElement());
    expect(getStyle()).toBe(before);
  });
});
