// src/pages/api/data.ts
import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const data = await db.any('SELECT * FROM station');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
