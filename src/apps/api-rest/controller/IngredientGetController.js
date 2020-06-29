import FindIngredientByIdQuery from '../../../core/ingredient/application/find/FindByIdQuery';

class IngredientGetController {
  async execute(req, res, next) {
    try {
      const findIngredientByIdQuery = new FindIngredientByIdQuery(req.params);
      const response = await req.queryBus.ask(findIngredientByIdQuery);

      res.status(200).json(response);
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default IngredientGetController;
