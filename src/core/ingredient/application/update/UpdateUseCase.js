import IngredientFinder from '../find/IngredientFinder';

class UpdateUseCase {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFinder = new IngredientFinder({ ingredientFactory, ingredientRepository, logger });
    this._ingredientRepository = ingredientRepository;
    this._logger = logger;
  }

  async execute({ id, name }) {
    this._logger.debug('UpdateUseCase execute');
    const ingredient = await this._ingredientFinder.findById({ id });

    if (name) {
      ingredient.updateName(name);
    }

    await this._ingredientRepository.update(ingredient);

    return ingredient.responseView();
  }
}

export default UpdateUseCase;
