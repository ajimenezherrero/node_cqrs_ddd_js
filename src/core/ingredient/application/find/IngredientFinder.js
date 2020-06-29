import DomainIngredientFinder from '../../domain/IngredientFinder';

class IngredientFinder {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._finder = new DomainIngredientFinder({
      ingredientFactory,
      ingredientRepository,
      logger,
    });
  }

  findById({ id }) {
    return this._finder.findById({ id });
  }
}

export default IngredientFinder;
