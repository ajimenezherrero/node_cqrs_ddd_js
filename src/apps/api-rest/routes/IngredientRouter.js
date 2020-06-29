import express from 'express';

import IngredientGetController from '../controller/IngredientGetController';

/**
 * @swagger
 * /ingredient/:id:
 *   post:
 *     summary: Get ingredient.
 *     responses:
 *       200:
 *         description: Response ok.
 *       5XX:
 *         description: Unexpected internal error.
 *       4XX:
 *         description: Invalid input data.
 */

class IngredientRouter {
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
    const ingredientGetController = new IngredientGetController();

    this._router.route('/:id').get(this.busInjection, ingredientGetController.execute);

    return this;
  }
}

export default IngredientRouter;
