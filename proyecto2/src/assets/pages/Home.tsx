import React from 'react';
import styles from './styles/Home.module.scss';

const Home: React.FC = () => {
    console.log('ENTRA AL HOME')
  return (
    <div className={styles.home}>
      <h2>Bienvenido a la Estación Meteorológica</h2>
      <p>Monitorea las condiciones meteorológicas en tiempo real y visualiza los reportes detallados de los diferentes sensores.</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Temperatura</h3>
          <p>Monitoreo de la temperatura ambiente en grados centígrados.</p>
        </div>
        <div className={styles.card}>
          <h3>Humedad</h3>
          <p>Medición de la humedad relativa en el ambiente.</p>
        </div>
        <div className={styles.card}>
          <h3>Velocidad del Viento</h3>
          <p>Detección de la rapidez del viento con anemómetros.</p>
        </div>
        <div className={styles.card}>
          <h3>Luminosidad</h3>
          <p>Medición de la cantidad de luz ambiental para determinar si está soleado o nublado.</p>
        </div>
        <div className={styles.card}>
          <h3>Calidad del Aire</h3>
          <p>Monitoreo de los niveles de partículas y gases en el aire.</p>
        </div>
        <div className={styles.card}>
          <h3>Presión</h3>
          <p>Registro de la presión atmosférica para prever cambios climáticos.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

