// src/database.ts
import pgPromise from 'pg-promise';
const pgp = pgPromise();
const connection = {
  host: 'localhost', // Docker container hostname
  port: 5432, // Database port
  database: 'citybike',
  user: 'academy',
  password: 'academy',
};
const db = pgp(connection);

export default db;
