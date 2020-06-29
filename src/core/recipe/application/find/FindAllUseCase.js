class FindAllUseCase {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFactory = recipeFactory;
    this._recipeRepository = recipeRepository;
    this._logger = logger;
  }

  async execute() {
    this._logger.debug('FindAllUseCase execute');
    const rawRecipes = await this._recipeRepository.findAll();
    const recipes = rawRecipes.map(rawRecipe => this._recipeFactory.create(rawRecipe).responseView());

    return {
      recipes,
    };
  }
}

export default FindAllUseCase;
