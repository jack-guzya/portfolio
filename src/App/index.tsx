import React from 'react';
// Components
import Nav from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Parallax, { Back, Base, Group } from '../common/Parallax';

import s from './App.module.css';

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
                <Back className={s.bg} />
                <Base className={s.home}>
                  <Home />
                </Base>
              </Group>
              <Group style={{ zIndex: 4 }}>
                <Base className={s.about}>
                  <About viewport={parent} />
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
