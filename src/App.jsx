import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './assets/css/App.module.css';

import Percent from './pages/Percent';
import Area from './pages/Area';
import DataSize from './pages/DataSize';
import Time from './pages/Time';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <i className="fa-solid fa-calculator fa-xl" />
          <h1 className={styles.title}>간편 계산기</h1>
        </header>
        <section className={styles.navi_wrap}>
          <nav className={styles.main_nav}>
            <ul>
              <li>
                <Link to="percent" className={styles.link}>
                  <i className="fa-solid fa-percent" />
                  <span className={styles.text}>퍼센트</span>
                </Link>
              </li>
              <li>
                <Link to="datasize" className={styles.link}>
                  <i className="fa-solid fa-clone" />
                  <span className={styles.text}>데이터</span>
                </Link>
              </li>
              <li>
                <Link to="area" className={styles.link}>
                  <i className="fa-solid fa-clone" />
                  <span className={styles.text}>면적</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className={styles.body_wrap}>
          <div className={styles.content_wrap}>
            <Routes>
              <Route path="/" element={<Percent />} />
              <Route path="percent" element={<Percent />} />
              <Route path="area" element={<Area />} />
              <Route path="datasize" element={<DataSize />} />
              <Route path="time" element={<Time />} />
            </Routes>
          </div>
        </section>
        <footer className={styles.footer}>
          <p>Copyright 2022 All Reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
