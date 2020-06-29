import IngredientNotFoundError from './IngredientNotFoundError';

class IngredientFinder {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFactory = ingredientFactory;
    this._ingredientRepository = ingredientRepository;
    this._logger = logger;
  }

  async findById({ id }) {
    const rawIngredient = await this._ingredientRepository.findById({ id });
    const ingredient = this._ingredientFactory.create(rawIngredient);

    this.ensureIngredientExist(ingredient);

    return ingredient;
  }

  ensureIngredientExist(ingredient) {
    if (typeof ingredient.id === 'undefined') {
      throw new IngredientNotFoundError();
    }
  }
}

export default IngredientFinder;
