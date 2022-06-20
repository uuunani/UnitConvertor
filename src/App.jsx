import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './assets/css/App.module.css';

import Percent from './pages/Percent';
import Area from './pages/Area';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <i className="fa-solid fa-calculator fa-xl" />
          <h1 className={styles.title}>간편 계산기</h1>
        </header>
        <section className={styles.body_wrap}>
          <nav className={styles.main_nav}>
            <ul>
              <li>
                <Link to="percent" className={styles.link}>
                  <span className={styles.text}>퍼센트 계산기</span>
                </Link>
              </li>
              <li>
                <Link to="area" className={styles.link}>
                  <span className={styles.text}>면적 계산기</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content_wrap}>
            <Routes>
              <Route path="/" element={<Percent />} />
              <Route path="percent" element={<Percent />} />
              <Route path="area" element={<Area />} />
            </Routes>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>Copyright 2022 All Reserved UNANI&apos;s</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
