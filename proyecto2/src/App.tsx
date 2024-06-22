import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Reportes from './assets/pages/Reports';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
