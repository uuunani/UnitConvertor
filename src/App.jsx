import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faPercent } from '@fortawesome/free-solid-svg-icons';
import styles from './assets/css/App.module.css';

import Percent from './pages/Percent';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <FontAwesomeIcon icon={faCalculator} className={styles.logo} />
          <h1 className={styles.title}>간편 계산기</h1>
        </header>
        <section className={styles.body_wrap}>
          <nav className={styles.main_nav}>
            <ul>
              <li>
                <Link to="percent" className={styles.link}>
                  <FontAwesomeIcon icon={faPercent} className={styles.icon} />
                  <span className={styles.text}>퍼센트 계산기</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content_wrap}>
            <Routes>
              <Route path="/" element={<Percent />} />
              <Route path="percent" element={<Percent />} />
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
