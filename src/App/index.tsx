import React from 'react';
// Components
import Nav from '../components/Navigation';
import * as Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Parallax, { Group, createLayer } from '../common/Parallax';

import s from './App.module.css';

const Base = createLayer(0);

function App() {
  return (
    <>
      <header className={s.header}>
        <Nav list={['Home', 'About', 'Skills', 'Experience', 'Works', 'Contacts']} />
      </header>
      <main>
        <Parallax>
          {(parent) => (
            <>
              <Group style={{ zIndex: 3 }}>
                <Home.Background viewport={parent}>
                  <Home.Container />
                </Home.Background>
              </Group>
              <Group style={{ zIndex: 4 }}>
                <Base>
                  <About viewport={parent} />
                </Base>
                <Base>
                  <Experience />
                </Base>
                <Base>
                  <Skills />
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
