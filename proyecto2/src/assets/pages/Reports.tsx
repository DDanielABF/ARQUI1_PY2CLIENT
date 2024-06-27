





import React, { useState } from 'react';
import styles from './styles/Reports.module.scss';
import useFetch from '../hooks/UseFetch';
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
const sensorEndpoints = {
  temperatura: 'http://localhost:5000/api/temperatura/stats',
  humedad: 'http://localhost:5000/api/humedad/stats',
  viento: 'http://localhost:5000/api/viento/stats',
  luz: 'http://localhost:5000/api/luz/stats',
  aire: 'http://localhost:5000/api/aire/stats',
  presion: 'http://localhost:5000/api/presion/stats',
};

const Reportes: React.FC = () => {
  const [selectedSensor, setSelectedSensor] = useState<string>('temperatura');
  const { data, loading, error } = useFetch(sensorEndpoints[selectedSensor]);

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
        {loading && <p>Cargando datos...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
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
                <td>{data.promedio}</td>
                <td>{data.mediana}</td>
                <td>{data.desviacionEstandar}</td>
                <td>{data.maximo}</td>
                <td>{data.minimo}</td>
                <td>{data.moda}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Reportes;
