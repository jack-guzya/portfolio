import React from 'react';
// Components
import Nav from '../components/Navigation';
import Home from '../components/Home';

import s from './App.module.css';

function App() {
  return (
    <>
      <header className={s.header}>
        <Nav list={['Home', 'About', 'Skills', 'Experience', 'Works', 'Contacts']} />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
