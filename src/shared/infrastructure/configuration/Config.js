const { PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT, LOGGER_LEVEL } = process.env;

class Config {
  constructor() {
    this._config = {
      db: {
        database: PG_DATABASE,
        host: PG_HOST,
        password: PG_PASSWORD,
        port: PG_PORT,
        user: PG_USER,
      },
      loggerLevel: LOGGER_LEVEL,
    };
  }

  get config() {
    return this._config;
  }
}

export default Config;
