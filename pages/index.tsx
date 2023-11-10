// pages/index.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

interface Station {
  id: number;
  station_name: string;
}

const fetchStationData = async (id: number): Promise<Station> => {
  const response = await fetch(`/api/data/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching station data');
  }
  return response.json();
};

const Home: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setStations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>CityBike</h1>
      <h2 className={styles.subtitle}>City Bike Stations</h2>
      <ul>
        {stations.map((station) => (
          <li key={station.id}>
            <Link href={`/[id]`} as={`/${station.id}`}>
              {station.station_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
