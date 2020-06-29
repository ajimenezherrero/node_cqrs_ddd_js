import FindByIdQuery from '../../../core/recipe/application/find/FindRecipeByIdQuery';

class RecipeGetController {
  async execute(req, res, next) {
    try {
      const findByIdQuery = new FindByIdQuery(req.params);
      const response = await req.queryBus.ask(findByIdQuery);

      res.status(200).json(response);
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default RecipeGetController;
