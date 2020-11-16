import React from 'react';
// import Parallax from '../../common/Parallax';
import s from './Home.module.css';

// const Home: React.FC = () => {
//   return (
//     <section className={s.container}>
//       <Parallax
//         back={() => <div className={s.bg} />}
//         base={() => <h2 className={s.title}>Hi, my Friend!</h2>}
//       />
//     </section>
//   );
// };

const Home: React.FC = () => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Hi, my Friend!</h2>
    </section>
  );
};

export default Home;
