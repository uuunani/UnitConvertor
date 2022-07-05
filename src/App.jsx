import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './assets/css/App.module.css';

import Header from './components/templates/Header';
import Nav from './components/templates/Nav';
import Footer from './components/templates/Footer';

import Percent from './pages/Percent';
import Area from './pages/Area';
import DataSize from './pages/DataSize';
import Time from './pages/Time';

/*
  TODO:
  1. 퍼센트 계산 오류 수정
  2. 데이터사이즈 비트계산 오류 수정
  3. 아이콘 다시 셋팅
  4. 모바일 네비 보기좋게 정렬
  5. 구글애드센스 거부사항 수정
  6. 사이트 레이아웃? 유지? 수정?
  7. 반응형에 대한 고민
  FIXME:
  1. CSS 초기화
  2. Header Footer fixed 써야하는 이유? Fixed는 Header에 컨텐츠가 많아지면 맞추기 어려움
*/

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
