import React from 'react';
import { Home, HomeBackground, About, Experience, Skills, Nav } from '../components';
import { Section, Title } from '../common';
import Parallax, { Group, createLayer } from '../common/Parallax';
import content from '../content.json';
import s from './App.module.css';

const Base = createLayer(0);

export const App = () => {
  const { home, about, experience, skills, navigation } = content;

  return (
    <>
      <header className={s.header}>
        <Nav list={navigation} />
      </header>

      <main>
        <Parallax>
          {(parent) => (
            <>
              <Group style={{ zIndex: 3 }}>
                <HomeBackground viewport={parent}>
                  <Home content={home} />
                </HomeBackground>
              </Group>

              <Group style={{ zIndex: 4 }}>
                <Base>
                  <Section className={s.about} id="about">
                    <Title className={s.about__title}>About</Title>
                    <About content={about} viewport={parent} />
                  </Section>
                </Base>

                <Base>
                  <Section className={s.experience} id="experience">
                    <Title className={s.experience__title}>Experience</Title>
                    <Experience content={experience} />
                  </Section>
                </Base>

                <Base>
                  <Section className={s.skills} id="skills">
                    <Title className={s.skills__title}>Skills</Title>
                    <Skills content={skills} />
                  </Section>
                </Base>
              </Group>
            </>
          )}
        </Parallax>
      </main>
    </>
  );
};
