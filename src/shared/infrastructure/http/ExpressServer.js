import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import ErrorManager from './ErrorManager';
import Swagger from './Swagger';

class ExpressServer {
  constructor({ config, logger }) {
    this._server = express();
    this._port = config.port;
    this._logger = logger;
    this._errorManager = new ErrorManager({ logger });

    this._server.use(cors());
    this._server.use(bodyParser.json());
    this._server.use(bodyParser.urlencoded({ extended: false }));
  }

  get server() {
    return this._server;
  }

  initRoutes() {
    this._server.get('/', (req, res, next) => {
      res.send('Recipe App is running...');
      next();
    });

    this._server.get('/health-check', (req, res, next) => {
      res.send('Recipe App Working...');
      next();
    });

    this._server.get('/error', (req, res, next) => {
      next(new Error('Force Error'));
    });
  }

  start() {
    const swaggerConfig = {
      apis: ['./src/apps/api-rest/routes/*.js', './dist/apps/api-rest/routes/*.js'],
    };
    const swagger = new Swagger(this._server, swaggerConfig).init();

    this.initRoutes();

    this._server.use(this._errorManager.errorManagement);

    this._server.listen(this._port, () => {
      this._logger.info(`Application server listen on port ${this._port}...`);
      this._logger.info('= = = = = = = = = = = = = = = = = = = = =');
    });
  }
}

export default ExpressServer;
