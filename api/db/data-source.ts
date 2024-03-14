import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'Organize360',
  password: 'sate2808.',
  username: 'postgres',
  port: 5432,
  host: '127.0.0.1',
  entities: [process.cwd(), 'dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
