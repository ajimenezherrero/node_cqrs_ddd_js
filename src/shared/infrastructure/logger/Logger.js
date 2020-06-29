import WinstonLogger from './WinstonLogger';

class Logger {
  constructor({ config }) {
    this._logger = new WinstonLogger({ loggerLevel: config.loggerLevel }).logger;
  }

  error(message, error, request) {
    this._logger.error(message);
  }

  warn(message) {
    this._logger.warn(message);
  }

  info(message) {
    this._logger.info(message);
  }

  http(message) {
    this._logger.http(message);
  }

  verbose(message) {
    this._logger.verbose(message);
  }

  debug(message) {
    this._logger.debug(message);
  }

  silly(message) {
    this._logger.silly(message);
  }
}

export default Logger;
