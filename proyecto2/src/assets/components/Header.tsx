import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Estación Meteorológica</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/reportes">Reportes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

