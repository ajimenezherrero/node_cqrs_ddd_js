class CreateUseCase {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFactory = recipeFactory;
    this._recipeRepository = recipeRepository;
    this._logger = logger;
  }

  async execute({ id, name, ingredients }) {
    this._logger.debug('CreateUseCase execute');
    const rawRecipe = await this._recipeRepository.create({
      id,
      name,
      ingredients,
    });
    const recipe = this._recipeFactory.create(rawRecipe);

    return recipe.responseView();
  }
}

export default CreateUseCase;
