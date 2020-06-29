import express from 'express';

import ExpressServer from '../../shared/infrastructure/http/ExpressServer';

import RecipeRouter from './routes/RecipeRouter';
import IngredientRouter from './routes/IngredientRouter';

const { PORT } = process.env;

class ApiRest {
  constructor({ logger, queryBus }) {
    this._logger = logger;
    this._queryBus = queryBus;
    this._server = new ExpressServer({
      logger: this._logger,
      config: {
        port: PORT,
      },
    });
  }

  busInjection = (req, res, next) => {
    req.queryBus = this._queryBus;

    next();
  };

  init() {
    const recipeRouter = new RecipeRouter(this._queryBus).init().router;
    const ingredientRouter = new IngredientRouter(this._queryBus).init().router;

    this._server.server.use('/recipe', recipeRouter);
    this._server.server.use('/ingredient', ingredientRouter);
    this._server.start();
  }
}

export default ApiRest;
