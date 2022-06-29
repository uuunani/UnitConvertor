import React from 'react';
import styles from '../../assets/css/templates/Header.module.css';

function Header({ toggleNav }) {
  return (
    <header className={styles.header}>
      <div className={styles.title_wrap}>
        <i className="fa-solid fa-calculator fa-xl" />
        <h1 className={styles.title}>간편 계산기</h1>
      </div>
      <button
        type="submit"
        onClick={toggleNav}
        className={styles.main_nav_toggle}
      >
        <i className="fas fa-bars" />
      </button>
    </header>
  );
}

export default Header;
