// pages/api/data/[station_id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../database'; // Import your database connection

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { station_id } = req.query;

    // Fetch station information from the database using station id
    const stationData = await db.oneOrNone(
      'SELECT station_name, station_address FROM station WHERE id = $1',
      station_id
    );

    if (!stationData) {
      return res.status(404).json({ error: 'Station not found' });
    }

    return res.status(200).json(stationData);
  } catch (error) {
    console.error('Error in API route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
