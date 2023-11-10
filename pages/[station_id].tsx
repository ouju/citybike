// pages/[station_id].tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import type { Station, ResponseError } from '../interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const StationPage = () => {
  const router = useRouter();
  const { station_id } = router.query;


  // Fetch station information based on station_id
  const { data: stationData, error } = useSWR<Station, ResponseError>(() => (
    station_id ? `/api/data/${station_id}` : null
  ), fetcher)

  if (error) return <div>Error loading station data</div>;
  if (!stationData) return <div>Loading...</div>;

  const { station_name, station_address } = stationData;

  return (
    <div>
      <h1>{station_name}</h1>
      <p>Address: {station_address}</p>
    </div>
  );
};

export default StationPage;
