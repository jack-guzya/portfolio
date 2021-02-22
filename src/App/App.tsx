import React from 'react';
import { Home, About, Experience, Skills, Nav } from '../components';
import { Section, Container, Title } from '../common';
import content from '../content.json';
import s from './App.module.css';

export const App = () => {
  const { home, about, experience, skills, navigation } = content;

  return (
    <>
      <header className={s.header}>
        <Nav linkList={navigation} />
      </header>

      <main>
        <Section className={s.home} id="home">
          <Home content={home} />
        </Section>

        <Section className={s.about} id="about">
          <Container>
            <Title className={s.about__title}>About</Title>
            <About content={about} />
          </Container>
        </Section>

        <Section className={s.experience} id="experience">
          <Container>
            <Title className={s.experience__title}>Experience</Title>
            <Experience content={experience} />
          </Container>
        </Section>

        <Section className={s.skills} id="skills">
          <Container>
            <Title className={s.skills__title}>Skills</Title>
            <Skills content={skills} />
          </Container>
        </Section>
      </main>
    </>
  );
};
