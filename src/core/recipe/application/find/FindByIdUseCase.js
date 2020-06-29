import RecipeFinder from './RecipeFinder';

class FindByIdUseCase {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFinder = new RecipeFinder({ recipeFactory, recipeRepository, logger });
    this._logger = logger;
  }

  async execute({ id }) {
    this._logger.debug('FindByIdUseCase execute');
    const recipe = await this._recipeFinder.findById({ id });

    return recipe.responseView();
  }
}

export default FindByIdUseCase;
