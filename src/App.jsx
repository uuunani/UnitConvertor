import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import styles from './styles/App.module.css';

import Introduce from './pages/Introduce';
import Percent from './pages/Percent';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>단위 변환기</h1>
        </header>
        <section className={styles.body_wrap}>
          <nav className={styles.main_nav}>
            <ul>
              <Link to="percent">퍼센트</Link>
              <li>2</li>
            </ul>
          </nav>
          <div className={styles.content_wrap}>
            <Routes>
              <Route path="/" element={<Introduce />} />
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
