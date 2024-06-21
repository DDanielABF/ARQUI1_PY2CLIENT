import React, { useState } from 'react';
import Temperatura from'../components/Temperatura'

import Humedad from '../components/Humedad';
import VelocidadViento from '../components/VelocidadViento';
import Luminosidad from '../components/Luminosidad';
import CalidadAire from '../components/CalidadAire';
import Presion from '../components/Presion';
import styles from './styles/Reports.scss';

const Reportes: React.FC = () => {
  const [selectedSensor, setSelectedSensor] = useState<string>('temperatura');

  const renderSensorData = () => {
    switch (selectedSensor) {
      case 'temperatura':
        return <Temperatura />;
      case 'humedad':
        return <Humedad />;
      case 'viento':
        return <VelocidadViento />;
      case 'luz':
        return <Luminosidad />;
      case 'aire':
        return <CalidadAire />;
      case 'presion':
        return <Presion />;
      default:
        return <Temperatura />;
    }
  };

  return (
    <div className={styles.reportes}>
      <h2>Reportes Meteorológicos</h2>
      <div className={styles.selector}>
        <label htmlFor="sensor-select">Seleccionar Sensor: </label>
        <select id="sensor-select" value={selectedSensor} onChange={(e) => setSelectedSensor(e.target.value)}>
          <option value="temperatura">Temperatura</option>
          <option value="humedad">Humedad</option>
          <option value="viento">Velocidad del Viento</option>
          <option value="luz">Luminosidad</option>
          <option value="aire">Calidad del Aire</option>
          <option value="presion">Presión</option>
        </select>
      </div>
      <div className={styles.sensorDataContainer}>
        {renderSensorData()}
      </div>
    </div>
  );
}

export default Reportes;

