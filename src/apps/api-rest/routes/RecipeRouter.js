import express from 'express';

import RecipeGetController from '../controller/RecipeGetController';

/**
 * @swagger
 * /recipe/:id:
 *   post:
 *     summary: Get recipe.
 *     responses:
 *       200:
 *         description: Response ok.
 *       5XX:
 *         description: Unexpected internal error.
 *       4XX:
 *         description: Invalid input data.
 */

class RecipeRouter {
  constructor(queryBus) {
    this._queryBus = queryBus;
    this._router = new express.Router();
  }

  get router() {
    return this._router;
  }

  busInjection = (req, res, next) => {
    req.queryBus = this._queryBus;

    next();
  };

  init() {
    const recipeGetController = new RecipeGetController();

    this._router.route('/:id').get(this.busInjection, recipeGetController.execute);

    return this;
  }
}

export default RecipeRouter;
