// src/pages/index.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';
import ListItem from '../components/ListItem';
import styles from '../styles/index.module.css';

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((sortedData) => setData(sortedData));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>CityBike</h1>
      <h2 className={styles.subtitle}>City Bike Stations</h2>
      <ul className={styles['column-list']}>
        {data.map((item) => (
          <ListItem key={item.id} id={item.id} stationName={item.station_name} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
