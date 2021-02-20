import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Skill } from './Skill';
import s from './Skill.module.css';

describe('Experience component', () => {
  const name = 'Test-skill';
  const rate = 75;
  let link: string | undefined;

  afterEach(cleanup);

  test('should be rendered and have the default link', () => {
    render(<Skill name={name} rate={rate} />);
    const container = screen.getByText(name).parentNode as HTMLElement;

    expect(container).toBeInTheDocument();
    expect(container.getAttribute('href')).toBe('#');
    expect(container.getAttribute('target')).toBe('_self');
  });

  test('should have a capability to get a link', () => {
    link = 'www.link.com';
    render(<Skill name={name} rate={rate} link={link} />);
    const container = screen.getByText(name).parentNode as HTMLElement;

    expect(container.getAttribute('href')).toBe(link);
    expect(container.getAttribute('target')).toBe('_blank');
  });

  test('should render a skill rate', () => {
    render(<Skill name={name} rate={rate} />);
    const rateElement = screen.getByText(new RegExp(`${rate}`));
    const stroke = document.querySelector(`.${s.circle}`);

    expect(rateElement.textContent).toBe(`${rate}%`);
    expect(stroke?.getAttribute('stroke-dasharray')).toBe(`${rate}, 100`);
  });
});
