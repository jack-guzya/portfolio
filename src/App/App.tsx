import React from 'react';
import { Home, About, Experience, Skills, Nav } from '../components';
import { Section, Title } from '../common';
import content from '../content.json';
import s from './App.module.css';

export const App = () => {
  const { home, about, experience, skills, navigation } = content;

  return (
    <>
      <header className={s.header}>
        <Nav list={navigation} />
      </header>

      <main>
        <Home content={home} id="home" />
        <Section className={s.about} id="about">
          <Title className={s.about__title}>About</Title>
          <About content={about} />
        </Section>

        <Section className={s.experience} id="experience">
          <Title className={s.experience__title}>Experience</Title>
          <Experience content={experience} />
        </Section>

        <Section className={s.skills} id="skills">
          <Title className={s.skills__title}>Skills</Title>
          <Skills content={skills} />
        </Section>
      </main>
    </>
  );
};
