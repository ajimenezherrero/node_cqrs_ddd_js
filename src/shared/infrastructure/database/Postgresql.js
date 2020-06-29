import { Pool } from 'pg';
import DatabaseError from './DatabaseError';
import catchPostgresError from './catchPostgresError';

let poolInstance;

const configurationKeys = ['database', 'host', 'password', 'port', 'user'];
const checkConfiguration = config => {
  console.log('config', config);
  const hasValidConfiguration = configurationKeys.every(key => config[key]);

  if (!hasValidConfiguration) {
    throw new DatabaseError('Invalid configuration keys');
  }
};

class Postgresql {
  constructor({ config, logger }) {
    logger.info('Postgresql constructor');

    this._logger = logger;
    this.configPG = {
      database: config.database,
      host: config.host,
      max: 10,
      password: config.password,
      port: config.port,
      user: config.user,
    };
  }

  getPool() {
    if (!poolInstance) {
      this._logger.info('Creating a Pool for Postgresql');
      checkConfiguration(this.configPG);

      poolInstance = new Pool(this.configPG);
    }

    return poolInstance;
  }

  @catchPostgresError
  async query(queryString, values) {
    const pool = this.getPool();
    const client = await pool.connect();

    try {
      return await client.query(queryString, values);
    } finally {
      client.release();
    }
  }
}

export default Postgresql;
