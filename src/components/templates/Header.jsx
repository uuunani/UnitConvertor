import React from 'react';

import styles from '../../styles/components/templates/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>단위 계산기</h1>
        <span>KR | ENG</span>
      </div>
    </header>
  );
}

export default Header;
