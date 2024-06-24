import React, { useEffect, useState } from 'react';
import styles from './styles/Home.module.scss';
import useFetch from '../hooks/UseFetch';

const sensorData = [
  { title: 'Temperatura', description: 'Monitoreo de la temperatura ambiente en grados centígrados.', endpoint: 'http://localhost:5000/api/temperatura' },
  { title: 'Humedad', description: 'Medición de la humedad relativa en el ambiente.', endpoint: 'http://localhost:5000/api/humedad' },
  { title: 'Velocidad del Viento', description: 'Detección de la rapidez del viento con anemómetros.', endpoint: 'http://localhost:5000/api/viento' },
  { title: 'Luminosidad', description: 'Medición de la cantidad de luz ambiental para determinar si está soleado o nublado.', endpoint: 'http://localhost:5000/api/luz' },
  { title: 'Calidad del Aire', description: 'Monitoreo de los niveles de partículas y gases en el aire.', endpoint: 'http://localhost:5000/api/aire' },
  { title: 'Presión', description: 'Registro de la presión atmosférica para prever cambios climáticos.', endpoint: 'http://localhost:5000/api/presion' },
];

const Home: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`${styles.home} ${fadeIn ? styles.fadeIn : ''}`}>
      <h2>Bienvenido a la Estación Meteorológica</h2>
      <p>Monitorea las condiciones meteorológicas en tiempo real y visualiza los reportes detallados de los diferentes sensores.</p>
      <div className={styles.cards}>
        {sensorData.map((sensor, index) => (
          <SensorCard key={index} title={sensor.title} description={sensor.description} endpoint={sensor.endpoint} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
}

const SensorCard: React.FC<{ title: string, description: string, endpoint: string, delay: number }> = ({ title, description, endpoint, delay }) => {
  const { data, loading, error } = useFetch(endpoint);

  return (
    <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {loading && <p>Cargando datos...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Datos actuales: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default Home;
