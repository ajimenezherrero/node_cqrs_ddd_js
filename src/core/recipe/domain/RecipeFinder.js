import RecipeNotFoundError from './RecipeNotFoundError';

class RecipeFinder {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFactory = recipeFactory;
    this._recipeRepository = recipeRepository;
    this._logger = logger;
  }

  async findById({ id }) {
    const rawRecipe = await this._recipeRepository.findById({ id });
    const recipe = this._recipeFactory.create(rawRecipe);

    this.ensureRecipeExist(recipe);

    return recipe;
  }

  ensureRecipeExist(recipe) {
    if (typeof recipe.id === 'undefined') {
      throw new RecipeNotFoundError();
    }
  }
}

export default RecipeFinder;
