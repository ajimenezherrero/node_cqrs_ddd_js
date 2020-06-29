import RecipeFinder from '../find/RecipeFinder';

class UpdateUseCase {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFinder = new RecipeFinder({ recipeFactory, recipeRepository, logger });
    this._recipeRepository = recipeRepository;
    this._logger = logger;
  }

  async execute({ id, name, ingredients }) {
    this._logger.debug('UpdateUseCase execute');
    const recipe = await this._recipeFinder.findById({ id });

    if (name) {
      recipe.updateName(name);
    }

    if (ingredients) {
      recipe.updateIngredients(ingredients);
    }

    await this._recipeRepository.update(recipe);

    return recipe.responseView();
  }
}

export default UpdateUseCase;
