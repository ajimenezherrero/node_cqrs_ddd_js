import RecipeFinder from '../find/RecipeFinder';
import RecipeStatus from '../../domain/RecipeStatus';

class DestroyByIdUseCase {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._recipeFinder = new RecipeFinder({ recipeFactory, recipeRepository, logger });
    this._recipeRepository = recipeRepository;
    this._logger = logger;
  }

  async execute({ id }) {
    this._logger.debug('DestroyByIdUseCase execute');
    const recipe = await this._recipeFinder.findById({ id });

    recipe.updateStatus(RecipeStatus.disabled);

    await this._recipeRepository.update(recipe);

    return id;
  }
}

export default DestroyByIdUseCase;
