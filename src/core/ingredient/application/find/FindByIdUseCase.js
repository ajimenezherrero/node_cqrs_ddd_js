import IngredientFinder from './IngredientFinder';

class FindByIdUseCase {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFinder = new IngredientFinder({ ingredientFactory, ingredientRepository, logger });
    this._logger = logger;
  }

  async execute({ id }) {
    this._logger.debug('FindByIdUseCase execute');
    const ingredient = await this._ingredientFinder.findById({ id });

    return ingredient.responseView();
  }
}

export default FindByIdUseCase;
