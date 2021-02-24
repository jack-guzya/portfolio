import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SecondarySkills } from './Secondary';
import s from './Secondary.module.css';

const data = [
  {
    title: 'Development',
    list: ['Jest', 'JS', 'TS'],
  },
  {
    title: 'Others',
    list: ['MS Word', 'OOP'],
  },
];

describe('SecondarySkills component', () => {
  beforeEach(() => render(<SecondarySkills data={data} />));

  const getButton = () => screen.getByText(/See more/i);
  const queryTable = () => document.querySelector(`.${s.table}`);
  const clickButton = () => fireEvent.click(getButton());

  test('should be rendered', () => {
    expect(getButton()).toBeInTheDocument();
  });

  test('a table should be unmounted for an inactive button', () => {
    expect(queryTable()).not.toBeInTheDocument();
  });

  test('a table should be mounted/unmounted for an active/inactive button', async () => {
    clickButton();

    expect(queryTable()).toBeInTheDocument();

    clickButton();
    fireEvent.animationEnd(document.querySelector(`.${s.container}`) as Element);

    expect(queryTable()).not.toBeInTheDocument();
  });

  test('a table contains a data', async () => {
    clickButton();
    await waitFor(queryTable);

    expect(screen.queryByText('Development')).toBeInTheDocument();
    expect(screen.queryByText('OOP')).toBeInTheDocument();
  });
});
