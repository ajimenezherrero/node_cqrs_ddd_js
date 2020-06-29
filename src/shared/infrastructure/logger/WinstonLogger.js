import winston from 'winston';

let instance;

class WinstonLogger {
  constructor({ loggerLevel }) {
    this._loggerLevel = loggerLevel;
  }

  get logger() {
    if (!instance) {
      instance = winston.createLogger({
        level: this._loggerLevel,
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
          }),
        ],
      });
    }

    return instance;
  }
}

export default WinstonLogger;
