// src/utils/api.ts
interface DataItem {
  id: number;
  station_name: string;
}

export const fetchData = async (): Promise<DataItem[]> => {
  try {
    const response = await fetch('/api/data');
    const data: DataItem[] = await response.json();
    return data.sort((a, b) => a.station_name.localeCompare(b.station_name));
  } catch (error) {
    console.error(error);
    return [];
  }
};
