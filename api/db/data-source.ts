import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  port: +process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  entities: [process.cwd(), 'dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
