import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    description: 'Api REST for serve Recipe and Ingredient info',
    title: 'User Monolith Api Rest',
    version: '1.0.0',
  },
  securityDefinitions: {},
  basePath: '',
};

class Swagger {
  constructor(server, { apis }) {
    this._server = server;
    this._swaggerSpec = swaggerJsDoc({
      swaggerDefinition,
      apis,
    });
  }

  init() {
    this._server.use('/api-docs', swaggerUi.serve);
    this._server.get('/api-docs', swaggerUi.setup(this._swaggerSpec));
  }
}

export default Swagger;
