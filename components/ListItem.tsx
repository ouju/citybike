import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';

interface ListItemProps {
  id: number;
  stationName: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, stationName }) => (
  <li className={styles['list-item']} key={id}>
    <Link href={`/[station_name]`} as={`/${encodeURIComponent(stationName)}`}>
      {stationName}
    </Link>
  </li>
);

export default ListItem;
