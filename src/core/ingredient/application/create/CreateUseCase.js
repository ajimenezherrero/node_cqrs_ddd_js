class CreateUseCase {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFactory = ingredientFactory;
    this._ingredientRepository = ingredientRepository;
    this._logger = logger;
  }

  async execute({ id, name }) {
    this._logger.debug('CreateUseCase execute');
    const rawIngredient = await this._ingredientRepository.create({
      id,
      name,
    });
    const ingredient = this._ingredientFactory.create(rawIngredient);

    return ingredient.responseView();
  }
}

export default CreateUseCase;
