import React, { useState } from 'react';
import styles from './styles/Reports.module.scss';

const sensorData = {
  temperatura: {
    promedio: 22,
    mediana: 21,
    desviacionEstandar: 2.5,
    maximo: 30,
    minimo: 15,
    moda: 20,
  },
  humedad: {
    promedio: 65,
    mediana: 66,
    desviacionEstandar: 5,
    maximo: 80,
    minimo: 50,
    moda: 68,
  },
  viento: {
    promedio: 10,
    mediana: 9,
    desviacionEstandar: 1.5,
    maximo: 15,
    minimo: 5,
    moda: 8,
  },
  luz: {
    promedio: 300,
    mediana: 280,
    desviacionEstandar: 50,
    maximo: 400,
    minimo: 200,
    moda: 290,
  },
  aire: {
    promedio: 45,
    mediana: 44,
    desviacionEstandar: 4,
    maximo: 55,
    minimo: 35,
    moda: 46,
  },
  presion: {
    promedio: 1010,
    mediana: 1012,
    desviacionEstandar: 8,
    maximo: 1020,
    minimo: 1000,
    moda: 1011,
  },
};

const Reportes: React.FC = () => {
  const [selectedSensor, setSelectedSensor] = useState<string>('temperatura');

  const sensorValues = sensorData[selectedSensor];

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
        <table className={styles.sensorTable}>
          <thead>
            <tr>
              <th>Promedio</th>
              <th>Mediana</th>
              <th>Desviación Estándar</th>
              <th>Máximo</th>
              <th>Mínimo</th>
              <th>Moda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{sensorValues.promedio}</td>
              <td>{sensorValues.mediana}</td>
              <td>{sensorValues.desviacionEstandar}</td>
              <td>{sensorValues.maximo}</td>
              <td>{sensorValues.minimo}</td>
              <td>{sensorValues.moda}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reportes;

