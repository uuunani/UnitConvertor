import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/templates/Nav.module.css';

function Nav({ closeNav, isNavOpen }) {
  const toggleClass = isNavOpen ? styles.open : '';

  return (
    <nav className={`${styles.main_nav} ${toggleClass}`}>
      <ul>
        <li>
          <Link to="percent" onClick={closeNav} className={styles.link}>
            <i className="fa-solid fa-percent" />
            <span className={styles.text}>퍼센트</span>
          </Link>
        </li>
        <li>
          <Link to="datasize" onClick={closeNav} className={styles.link}>
            <i className="fa-solid fa-clone" />
            <span className={styles.text}>데이터</span>
          </Link>
        </li>
        <li>
          <Link to="area" onClick={closeNav} className={styles.link}>
            <i className="fa-solid fa-clone" />
            <span className={styles.text}>면적</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
