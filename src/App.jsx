import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './assets/css/App.module.css';

import Header from './components/templates/Header';
import Nav from './components/templates/Nav';
import Footer from './components/templates/Footer';

import Percent from './pages/Percent';
import Area from './pages/Area';
import DataSize from './pages/DataSize';
import DataSpeed from './pages/DataSpeed';
import Time from './pages/Time';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // 모바일 네비게이션 토클 이벤트
  const toggleNav = () => {
    if (isNavOpen) setIsNavOpen(false);
    else setIsNavOpen(true);
  };

  // 모바일 네비게이션 닫기
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header toggleNav={toggleNav} />
        <Nav closeNav={closeNav} isNavOpen={isNavOpen} />
        <section className={styles.body_wrap}>
          <div className={styles.content_wrap}>
            <Routes>
              <Route path="/" element={<Percent />} />
              <Route path="percent" element={<Percent />} />
              <Route path="area" element={<Area />} />
              <Route path="datasize" element={<DataSize />} />
              <Route path="dataspeed" element={<DataSpeed />} />
              <Route path="time" element={<Time />} />
            </Routes>
          </div>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
