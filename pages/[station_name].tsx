// pages/[station_name].tsx
import { useRouter } from 'next/router';

const StationPage = () => {
  const router = useRouter();
  const { station_name } = router.query;

  return (
    <div>
      <h1>Station Page: {station_name}</h1>
      {/* Add content for the station page */}
    </div>
  );
};

export default StationPage;
