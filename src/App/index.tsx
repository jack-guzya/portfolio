import React from 'react';
// Components
import Nav from '../components/Navigation';

import s from './App.module.css';

function App() {
  return (
    <header className={s.header}>
      <Nav />
    </header>
  );
}

export default App;
