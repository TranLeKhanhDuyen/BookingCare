import { Sequelize } from 'sequelize';
import { DATABASE_URL } from '../core/config/env-config';

export const db = new Sequelize(DATABASE_URL, {
  logging: console.log
});

export async function connectDatabase() {
  try {
    console.log('Connecting to Database...');
    await db.authenticate();
    console.log('Connect to Database successfully');
  } catch (error) {
    console.error(`Connect to Database error --> ${error}`);
  }
}
