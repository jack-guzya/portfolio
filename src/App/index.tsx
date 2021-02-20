import React from 'react';
import Nav from '../components/Navigation';
import * as Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Parallax, { Group, createLayer } from '../common/Parallax';
import content from '../content.json';
import s from './App.module.css';

const Base = createLayer(0);

function App() {
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
                <Home.Background viewport={parent}>
                  <Home.Container content={home} />
                </Home.Background>
              </Group>
              <Group style={{ zIndex: 4 }}>
                <Base>
                  <About viewport={parent} content={about} />
                </Base>
                <Base>
                  <Experience content={experience} />
                </Base>
                <Base>
                  <Skills content={skills} />
                </Base>
              </Group>
            </>
          )}
        </Parallax>
      </main>
    </>
  );
}

export default App;
